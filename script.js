document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bgMusic');
    const musicIcon = document.querySelector('.music-icon');
    
    // 处理音乐播放控制
    musicIcon.addEventListener('click', function() {
        if(audio.paused) {
            audio.play();
            musicIcon.classList.add('playing');
        } else {
            audio.pause();
            musicIcon.classList.remove('playing');
        }
    });
    
    // 微信自动播放处理
    document.addEventListener('WeixinJSBridgeReady', function() {
        audio.play();
    }, false);
    
    // 页面滚动时的渐入效果
    const elements = document.querySelectorAll('.photo-container, .code-container, .blessing');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.8s ease-out';
        observer.observe(element);
    });
}); 