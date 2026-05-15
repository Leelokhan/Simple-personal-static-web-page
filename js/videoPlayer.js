class VideoPlayer {
    constructor(videoElement, videoContainer) {
        this.video = videoElement;
        this.container = videoContainer;
        this.videoFiles = [];
        this.videoNames = [];
        this.currentVideoIndex = 0;
        this.isFullscreen = false;
        
        this.loadVideos();
        this.setupVideoEndHandler();
    }
    
    async loadVideos() {
        try {
            const response = await fetch('assets.json');
            const data = await response.json();
            
            if (data.vd && data.vd.length > 0) {
                data.vd.forEach(file => {
                    this.videoFiles.push('vd/' + encodeURIComponent(file));
                    this.videoNames.push(decodeURIComponent(file.replace(/\.(mp4|webm|ogg)$/i, '')));
                });
                
                if (this.videoFiles.length > 0) {
                    this.video.src = this.videoFiles[0];
                    this.setupVideoList();
                }
            }
        } catch (error) {
            console.error('Error loading videos:', error);
        }
    }
    
    playPause() {
        if (this.video.paused) {
            this.video.play();
        } else {
            this.video.pause();
        }
    }
    
    nextVideo() {
        if (this.videoFiles.length > 0) {
            this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoFiles.length;
            this.video.src = this.videoFiles[this.currentVideoIndex];
            this.video.load();
            this.video.play().catch(error => console.error('Error playing video:', error));
            this.updateVideoName();
        }
    }
    
    prevVideo() {
        if (this.videoFiles.length > 0) {
            this.currentVideoIndex = (this.currentVideoIndex - 1 + this.videoFiles.length) % this.videoFiles.length;
            this.video.src = this.videoFiles[this.currentVideoIndex];
            this.video.load();
            this.video.play().catch(error => console.error('Error playing video:', error));
            this.updateVideoName();
        }
    }
    
    setupVideoEndHandler() {
        this.video.addEventListener('ended', () => {
            this.nextVideo();
        });
    }
    
    updateVideoName() {
        const videoNameElement = document.getElementById('video-name');
        if (videoNameElement && this.videoNames[this.currentVideoIndex]) {
            videoNameElement.textContent = this.videoNames[this.currentVideoIndex];
        }
    }
    
    setupVideoList() {
        const videoListContainer = document.createElement('div');
        videoListContainer.style.marginTop = '10px';
        videoListContainer.style.maxHeight = '150px';
        videoListContainer.style.overflowY = 'auto';
        
        // Only show videos from vd folder
        this.videoFiles.forEach((file, index) => {
            if (file.startsWith('vd/')) {
                const videoItem = document.createElement('div');
                videoItem.style.padding = '5px';
                videoItem.style.cursor = 'pointer';
                videoItem.style.backgroundColor = index === this.currentVideoIndex ? '#f0f0f0' : 'transparent';
                videoItem.textContent = this.videoNames[index];
                
                videoItem.addEventListener('click', () => {
                    this.currentVideoIndex = index;
                    this.video.src = this.videoFiles[index];
                    this.video.play();
                    this.updateVideoName();
                    
                    // Update selection highlight
                    Array.from(videoListContainer.children).forEach((child, i) => {
                        child.style.backgroundColor = i === index ? '#f0f0f0' : 'transparent';
                    });
                });
                
                videoListContainer.appendChild(videoItem);
            }
        });
        
        this.container.appendChild(videoListContainer);
    }
}

// Initialize video player when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-player');
    const videoElement = document.getElementById('video');
    
    if (videoElement && videoContainer) {
        const videoPlayer = new VideoPlayer(videoElement, videoContainer);
        
        // Setup controls
        document.getElementById('video-play-pause').addEventListener('click', () => {
            videoPlayer.playPause();
        });
        
        document.getElementById('video-prev').addEventListener('click', () => {
            videoPlayer.prevVideo();
        });
        
        document.getElementById('video-next').addEventListener('click', () => {
            videoPlayer.nextVideo();
        });
    }
});