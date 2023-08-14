
//  Audio  ELement
let songIndex = 0;
let audioElement = new Audio('audio/senorita.mp3');
let playBtn = document.querySelector("#playBtn");
let progressBar =document.querySelector("#seekBar");

playBtn.addEventListener('click' , ()=>{
 if(audioElement.paused||audioElement.currentTime===0){
  audioElement.play();
 playBtn.classList.remove("fa-circle-play");
 playBtn.classList.add("fa-circle-pause");
 
 }

 else{
  audioElement.pause();
  playBtn.classList.remove("fa-circle-pause");
  playBtn.classList.add("fa-circle-play");
 }

} )

// Progress Bar 
audioElement.addEventListener('timeupdate', ()=>{
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  progressBar.value=progress;
})

progressBar.addEventListener('change',()=>{
  audioElement.currentTime = progressBar.value * audioElement.duration/100;
})

