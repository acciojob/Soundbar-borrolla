//your JS code here. If required.
//const buttons = document.querySelectorAll(".btn");
//const stopbutton = document.queryselector(".stop");

let currentSound = null; // This will hold the current playing sound

function playSound(soundName) {
  // If there is a sound already playing, stop it
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0; // This resets the sound to the beginning
  }

  // Create a new audio object and start playing the sound
  currentSound = new Audio(`sounds/${soundName}.mp3`);
  currentSound.play();
}

function stopAllSounds() {
  // If there is a sound playing, stop it
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0; // This resets the sound to the beginning
  }
}
