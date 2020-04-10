const player=document.querySelector(".player");
const video= player.querySelector(".viewer");
const progress= player.querySelector(".progress");
const progressbar=player.querySelector("progress__filled");
const toggle=player.querySelector(".toggle");
const skipbuttons=player.querySelectorAll("[data-skip]");
const ranges=player.querySelector(".player__slider");
function toggleplay() {
    if (video.paused) {
        video.play();
    }else{
        video.pause();
    }
}
function updatebutton() {
    const icon=this.paused? "play" : "pause";
    toggle.textContent=icon;
    console.log(icon);
}
function skip() {
    console.log(this.dataset.skip);
    video.currentTime+=parseFloat(this.dataset.skip);
}
function handlerangeupdate() {
    video[this.name]=this.value;
    console.log(this.name);
    console.log(this.value);
}
function handleprogress() {
    const percent=(video.currentTime/video.duration)*100;
    progressbar.style.flexbasis="${percent}%";
}
function scrub(e) {
    const scrubtime=(e.offsetx/progress.offsetwidth)*video.duration;
    video.currentTime=scrubtime;
}
video.addEventListener("click",toggleplay);
video.addEventListener("play",updatebutton);
video.addEventListener("pause",updatebutton);
video.addEventListener("timeuptdate",handleprogress);
toggle.addEventListener("click",toggleplay);
skipbuttons.forEach(button => button.addEventListener("click",skip));
ranges.forEach(range=>range.addEventListener("change",handlerangeupdate ));
ranges.forEach(range=>range.addEventListener("mousemove",handlerangeupdate ));
progress.addEventListener("click",scrub);