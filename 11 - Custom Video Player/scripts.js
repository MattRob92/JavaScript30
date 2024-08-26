/* Get own Elements*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skiptButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out Functions*/
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();

}

/* Hook up the Even Listerners*/