// Open Me button logic
const introOverlay = document.getElementById('introOverlay');
const openMeBtn = document.getElementById('openMeBtn');
const mainContent = document.getElementById('mainContent');

openMeBtn.addEventListener('click', () => {
  introOverlay.style.opacity = '0';
  setTimeout(() => {
    introOverlay.style.display = 'none';
    mainContent.classList.remove('hidden');
    mainContent.classList.add('fadein');
    // Try to play background music after user gesture
    music.play().catch(()=>{}); // prevents error if it can't play
  }, 700);
});

// Section switching
const buttons = document.querySelectorAll('.main-btn');
const sections = document.querySelectorAll('.section');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const idx = btn.getAttribute('data-section');
    sections.forEach((sec, i) => {
      if (sec.id === 'section'+idx) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  });
});

// Music controls
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let isMuted = false;
music.volume = 0.12; // Soft by default
musicBtn.addEventListener('click', () => {
  isMuted = !isMuted;
  music.muted = isMuted;
  musicBtn.textContent = isMuted ? '🔇' : '🔈';
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(()=>{music.play().catch(()=>{});}, 800);
});

// Listen to my voice button logic
const playVoiceBtn = document.getElementById('playVoiceBtn');
const voiceAudio = document.getElementById('voiceAudio');
let voicePlaying = false;

playVoiceBtn.addEventListener('click', () => {
  if (!voicePlaying) {
    voiceAudio.play();
    playVoiceBtn.textContent = '⏸ Pause';
    voicePlaying = true;
  } else {
    voiceAudio.pause();
    playVoiceBtn.textContent = '🎤 Listen to my voice';
    voicePlaying = false;
  }
});
voiceAudio.addEventListener('ended', () => {
  playVoiceBtn.textContent = '🎤 Listen to my voice';
  voicePlaying = false;
});
voiceAudio.addEventListener('pause', () => {
  playVoiceBtn.textContent = '🎤 Listen to my voice';
  voicePlaying = false;
});

// Collage Modal logic
const collageModal = document.getElementById('collageModal');
const collageModalImg = document.getElementById('collageModalImg');
const collageModalClose = document.getElementById('collageModalClose');
const collageImages = document.querySelectorAll('.collage img');

collageImages.forEach(img => {
  img.style.cursor = "pointer";
  img.addEventListener('click', () => {
    collageModalImg.src = img.src;
    collageModalImg.alt = img.alt || "";
    collageModal.classList.add('active');
  });
});

collageModalClose.addEventListener('click', () => {
  collageModal.classList.remove('active');
  collageModalImg.src = "";
});

collageModal.addEventListener('click', (e) => {
  // Only close if click is NOT on image or close button
  if (e.target === collageModal) {
    collageModal.classList.remove('active');
    collageModalImg.src = "";
  }
});

// Optional: close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape" && collageModal.classList.contains('active')) {
    collageModal.classList.remove('active');
    collageModalImg.src = "";
  }
});