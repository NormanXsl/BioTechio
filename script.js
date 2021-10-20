let video =  document.querySelector('.player video');
let controls =  document.querySelector('.player .controls');
let playbutton =  document.querySelector('#playbutton');
let pausebutton =  document.querySelector('#pausebutton');
let fullscreenbutton =  document.querySelector('#fullscreenbutton');
let progress =  document.querySelector('.progress');
let progressbar =  document.querySelector('.player.bar');

playbutton.addEventListener('click',  playvideo);
function playvideo(event) {
    video.play();
    playbutton.classList.add('hidden');
    pausebutton.classList.remove('hidden');

}

pausebutton.addEventListener('click',  pausevideo);
function pausevideo(event) {
    video.pause();
    playbutton.classList.remove('hidden');
    pausebutton.classList.add('hidden');
    

}

video.addEventListener('timeupdate', updateProgress);

function updateProgress(event){
    let  progress = video.currentTime * 100 / video.duration;
    progressbar.style.width = progress + '%';

}

progress.addEventListener('click', setprogress);

function setprogress (event){
    let progress = event. offsetX /  event. currentTarget. clientWidth;
    video.currentTime = progress * video.duration;


}


fullscreenbutton.addEventListener('click', enterFullscreen);

function enterFullscreen (event){
    video.requestFullscreen();


}

document.addEventListener('fullscreenchange', checkFullscreen);

function checkFullscreen(event){
    if(document.fullscreenElement == video){

    video.style.objectFit = 'contain';
    if(screen. orientation) screen. orientation.lock ('landscape');

    }
    else{
        video.style.objectFit = 'cover';
        if(screen. orientation) screen. orientation.unlock();
    }
}

controls.addEventListener('touchstart', togglecontrols);

function togglecontrols(event){
    if(!controls.classList.contains('visible')){
        event.preventDefault();
        controls.classList.add('visible');
    }

    else if (event.target == event.currentTarget){
        controls.classList.remove('visible');
    }


}

