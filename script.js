//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopbutton = document.queryselector(".stop");

let currentAudio;

///add event listener to each button
buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    // Play the new sound
    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
	});
});

stopButton.addEventListener("click", () => {
	if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset the audio's play position
  }
});


