//your JS code here. If required.
//const buttons = document.querySelectorAll(".btn");
//const stopbutton = document.queryselector(".stop");

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
	const btns = Array.from(document.querySelectorAll(".btn"));
const stopBtn = document.querySelector(".stop");


function playSounds(btn){
	btn.addEventListener('click', () => {
		const label= btn,innexrText.trim().toLowerCase();

		stopSounds();
	    if(label === 'stop') return;
	 const sound = document.getElementById(label);
	if(sound) sound.play();
	});
}

function stopSounds(){
	sounds.forEach(id => {
		const sound = document.getElementById(id);
		if(sound)
		{
			sound.pause();
			sound.currentTime = 0;
		}
	});
}


// Attach event listeners to all buttons
btns.forEach(playSounds);






