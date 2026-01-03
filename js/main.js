document.addEventListener('DOMContentLoaded', () => {
    const appStoreBtn = document.getElementById('appStoreBtn');
    const playStoreBtn = document.getElementById('playStoreBtn');

    if (appStoreBtn) {
        appStoreBtn.addEventListener('click', () => {
            window.open(CONFIG.APP_STORE_URL, '_blank');
        });
    }

    if (playStoreBtn) {
        playStoreBtn.addEventListener('click', () => {
            window.open(CONFIG.PLAY_STORE_URL, '_blank');
        });
    }
});
