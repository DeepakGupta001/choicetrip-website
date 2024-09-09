if (window.self !== window.top) {
    window.onclick = function(e) {
        e.preventDefault();
        document.documentElement.style.userSelect = 'none';
        window.top.postMessage({
            type: 'pageId',
            value: window.location.pathname.split('/').pop()
        }, '*')
    };
    document.head.insertAdjacentHTML('beforeend', `<style>div[id^='jarallax-container-'] > div,.mbr-video-foreground{overflow: visible!important;}.mbr-fullscreen,.mbr-fullscreen .mbr-overlay,.mbr-fullscreen .carousel-item img {min-height: 40vh !important;height: auto !important;}.mbr-section--full-height,.mbr-section-full {max-height: 40vh !important;}.mbr-section--full-height .mbr-overlay,.mbr-section-full .mbr-overlay {min-height: 40vh !important;}.full-screen .slider-fullscreen-image,.full-screen .mbr-overlay,.full-screen .carousel-item .container.container-slide {min-height: 40vh !important;}</style>`);
    document.addEventListener("DOMContentLoaded", arg => window.SmoothScroll.destroy());
}