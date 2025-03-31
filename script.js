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

//function to play sound
const playSound = (sound) => {
	const audio = new Audio(sound);
	audio.play();
};

//add event listener to buttons
Object.keys(sounds).forEach(key) => {
	document.getElementById(key).addEventListener('click', () => playSound(sounds[key]));
});


//stop button functionality
document.getElementById('stop').addEventListener('click', () => {
	const audioElements = document.querySelectorAll('audio');
	audioElements.forEach(audio) => audio.pause());
});







