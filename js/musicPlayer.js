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
            this.listElement = document.createElement('div');
            this.listElement.style.maxHeight = '200px';
            this.listElement.style.overflowY = 'auto';
            this.listElement.style.marginTop = '10px';
            document.getElementById('music-player').appendChild(this.listElement);
        }
        
        this.listElement.innerHTML = '';
        this.trackNames.forEach((name, index) => {
            const item = document.createElement('div');
            item.textContent = name;
            item.style.padding = '5px';
            item.style.cursor = 'pointer';
            if (index === this.currentTrackIndex) {
                item.style.backgroundColor = '#add8e6';
            } else {
                item.style.backgroundColor = '';
            }
            item.addEventListener('dblclick', () => {
                this.loadTrack(index);
                if (this.isPlaying) this.audioElement.play();
                this.renderPlaylist(); // 重新渲染列表以更新高亮
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
            this.audioElement.play();
        }
        this.isPlaying = !this.isPlaying;
    },

    nextTrack: function() {
        const nextIndex = (this.currentTrackIndex + 1) % this.playlist.length;
        this.loadTrack(nextIndex);
        if (this.isPlaying) this.audioElement.play();
        this.renderPlaylist();
    },

    prevTrack: function() {
        const prevIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
        this.loadTrack(prevIndex);
        if (this.isPlaying) this.audioElement.play();
        this.renderPlaylist();
    },

    setVolume: function(volume) {
        this.audioElement.volume = volume;
    }
};

// 初始化音乐播放器
window.addEventListener('DOMContentLoaded', () => {
    musicPlayer.init();
});