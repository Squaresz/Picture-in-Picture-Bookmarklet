javascript:(function() {
    let video = document.querySelector('video');
    if (video.hasAttribute('disablePictureInPicture')) {
        video.removeAttribute('disablePictureInPicture');
    }
    video.requestPictureInPicture()
        .then(() => {
            console.log('Picture-in-Picture enabled');
        })
        .catch(error => {
            console.error('Failed to enable Picture-in-Picture', error);
        });
})();
