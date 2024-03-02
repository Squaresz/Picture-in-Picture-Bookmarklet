# 🌐PIP Bookmarklet 

Enables you to put any video into Picture in Picture even if it doesnt allow it. (This includes Hulu, HBO, Disney, ect)

### Code:
https://raw.githubusercontent.com/Squaresz/Picture-in-Picture-Bookmarklet/main/PiP_Code.js

```
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
```
