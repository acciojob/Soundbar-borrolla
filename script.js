//your JS code here. If required.
//const buttons = document.querySelectorAll(".btn");
//const stopbutton = document.queryselector(".stop");
	const sounds = {
	applause: 'sounds/applause.mp3',
	boo : 'sounds/boo.mp3',
	gasp:  'sounds/gasp.mp3',
	tada : 'sounds/tada.mp3',
	victory : 'sounds/victory.mp3',
	wrong : 'sounds/wrong.mp3',
};

let currentAudio = null;

const playSound = (sound) => {
	if(currentAudio) {
		currentAudio.pause();
		currentAudio.currentTime = 0; // Reset audio 
	}
	currentAudio = new Audio(sound);
	currentAudio.play();
};

// Add event listener to buttons
Object.keys(sounds).forEach((key) => {
	document.getElementById(key).addEventListener('click', () => playSound(sounds[key]));      
});

// Stop button functionality
document.getElementById('stop').addEventListener('click', () => {
	if(currentAudio) {
		currentAudio.pause();
		currentAudio.currentTime = 0; // Reset audio
		currentAudio = null;
	}
});












