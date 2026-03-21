const playBtn = document.querySelector('.button');
const disc = document.querySelector('.disc');
const song = document.getElementById('Song');
const progress = document.getElementById('progress');
const progresscontain = document.getElementById('progresscontain');

//pause and play
playBtn.addEventListener('click', () => {
    if (song.paused) {
        song.play();
        playBtn.innerHTML = "Pause";
        // Adding the class "starts" the animation from where it last left off
        disc.classList.add('playing');
    } else {
        song.pause();
        playBtn.innerHTML = "Play";
        // Removing the class "freezes" the animation in its current rotation
        disc.classList.remove('playing');
    }
});

//progress bar
song.addEventListener('timeupdate', () => {
    if (song.duration) {
        const { duration, currentTime } = song;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    }
});

//jumping song
progresscontain.addEventListener('click', (e) => {
    const width = progresscontain.clientWidth;
    const clickX = e.offsetX;
    const duration = song.duration;

    song.currentTime = (clickX / width) * duration;
});