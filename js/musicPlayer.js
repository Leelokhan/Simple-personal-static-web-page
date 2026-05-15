// 音乐播放器功能实现
const musicPlayer = {
    audioElement: null,
    playlist: [],
    trackNames: [],
    currentTrackIndex: 0,
    isPlaying: false,
    listElement: null,

    init: function() {
        this.audioElement = document.createElement('audio');
        document.body.appendChild(this.audioElement);
        
        // 加载mc文件夹中的音乐文件
        this.loadPlaylist();
        
        // 设置事件监听
        this.audioElement.addEventListener('ended', () => this.nextTrack());
    },

    loadPlaylist: function() {
        fetch('assets.json')
            .then(response => response.json())
            .then(data => {
                if (data.mc && data.mc.length > 0) {
                    data.mc.forEach(file => {
                        this.playlist.push('mc/' + encodeURIComponent(file));
                        this.trackNames.push(decodeURIComponent(file.replace(/\.(flac|mp3)$/i, '')));
                    });
                    this.loadTrack(0);
                    this.renderPlaylist();
                }
            });
    },
    
    renderPlaylist: function() {
        if (!this.listElement) {
            this.listElement = document.getElementById('music-playlist');
        }
        
        this.listElement.innerHTML = '';
        this.trackNames.forEach((name, index) => {
            const item = document.createElement('div');
            item.className = 'playlist-item';
            if (index === this.currentTrackIndex) {
                item.classList.add('active');
            }
            item.innerHTML = `<i class="fas \${index === this.currentTrackIndex && this.isPlaying ? 'fa-volume-up' : 'fa-play-circle'}"></i> \${name}`;
            
            item.addEventListener('click', () => {
                this.loadTrack(index);
                this.isPlaying = true;
                this.audioElement.play();
                this.updateUI();
            });
            this.listElement.appendChild(item);
        });
    },

    loadTrack: function(index) {
        if (index >= 0 && index < this.playlist.length) {
            this.currentTrackIndex = index;
            this.audioElement.src = this.playlist[index];
        }
    },

    playPause: function() {
        if (this.isPlaying) {
            this.audioElement.pause();
        } else {
            if (this.audioElement.src === '' && this.playlist.length > 0) {
                this.loadTrack(0);
            }
            this.audioElement.play();
        }
        this.isPlaying = !this.isPlaying;
        this.updateUI();
    },

    updateUI: function() {
        const playPauseBtn = document.getElementById('music-play-pause');
        if (playPauseBtn) {
            playPauseBtn.innerHTML = this.isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
        }
        this.renderPlaylist();
    },

    nextTrack: function() {
        const nextIndex = (this.currentTrackIndex + 1) % this.playlist.length;
        this.loadTrack(nextIndex);
        if (this.isPlaying) this.audioElement.play();
        this.updateUI();
    },

    prevTrack: function() {
        const prevIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
        this.loadTrack(prevIndex);
        if (this.isPlaying) this.audioElement.play();
        this.updateUI();
    },

    setVolume: function(volume) {
        this.audioElement.volume = volume;
    }
};

// 初始化音乐播放器
window.addEventListener('DOMContentLoaded', () => {
    musicPlayer.init();
});