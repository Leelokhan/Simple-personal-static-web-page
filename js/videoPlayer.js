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
        this.updateUI();
    }

    updateUI() {
        const playPauseBtn = document.getElementById('video-play-pause');
        if (playPauseBtn) {
            playPauseBtn.innerHTML = this.video.paused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
        }
    }
    
    nextVideo() {
        if (this.videoFiles.length > 0) {
            this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videoFiles.length;
            this.video.src = this.videoFiles[this.currentVideoIndex];
            this.video.load();
            this.video.play().catch(error => console.error('Error playing video:', error));
            this.updateVideoName();
            this.updateUI();
        }
    }
    
    prevVideo() {
        if (this.videoFiles.length > 0) {
            this.currentVideoIndex = (this.currentVideoIndex - 1 + this.videoFiles.length) % this.videoFiles.length;
            this.video.src = this.videoFiles[this.currentVideoIndex];
            this.video.load();
            this.video.play().catch(error => console.error('Error playing video:', error));
            this.updateVideoName();
            this.updateUI();
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
        // Remove existing video list if any
        const existingList = this.container.querySelector('.playlist');
        if (existingList) existingList.remove();

        const videoListContainer = document.createElement('div');
        videoListContainer.className = 'playlist';
        videoListContainer.style.marginTop = '10px';
        videoListContainer.style.maxHeight = '100px';
        
        this.videoFiles.forEach((file, index) => {
            const videoItem = document.createElement('div');
            videoItem.className = 'playlist-item';
            if (index === this.currentVideoIndex) {
                videoItem.classList.add('active');
            }
            videoItem.innerHTML = `<i class="fas fa-video"></i> \${this.videoNames[index]}`;
            
            videoItem.addEventListener('click', () => {
                this.currentVideoIndex = index;
                this.video.src = this.videoFiles[index];
                this.video.play();
                this.updateVideoName();
                this.updateUI();
                
                // Update selection highlight
                Array.from(videoListContainer.children).forEach((child, i) => {
                    if (i === index) child.classList.add('active');
                    else child.classList.remove('active');
                });
            });
            
            videoListContainer.appendChild(videoItem);
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