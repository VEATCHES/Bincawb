 //Kontrol musik
const music = document.getElementById('bg-music');
const controlBtn = document.getElementById('musicControl');
const statusText = document.getElementById('musicStatus');

 //Mulai musik otomatis (bisa gagal di beberapa browser tanpa interaksi)
window.addEventListener('click', () => {
  music.play().catch(e => console.log("Autoplay diblokir:", e));
});

controlBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    statusText.textContent = "Pause";
  } else {
    music.pause();
    statusText.textContent = "Play";
  }
  
});


  