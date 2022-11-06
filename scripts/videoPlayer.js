var vid = document.getElementById("cooking-video");

document.querySelector('.btn-play').addEventListener('click', function() {
    if (vid.paused) {
        vid.play();
    } else {
        vid.pause();
    }
});