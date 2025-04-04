//your JS code here. If required.
//const buttons = document.querySelectorAll(".btn");
//const stopbutton = document.queryselector(".stop");

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const btns = Array.from(document.querySelectorAll(".btn"));
const stopBtn = document.querySelector(".stop");


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

function playSounds(btn){
	btn.addEventListener('click', () => {
		const label= btns.innexrText.trim().toLowerCase();
		stopSounds();
		
	    if(label === 'stop') return;
	 const sound = document.getElementById(label);
	if(sound) 
		sound.play();
	});
}


// Attach event listeners to all buttons
// btns.forEach(playSounds);
// stopBtn.addEventListener("click", stopSounds);
if (stopBtn) {
  stopBtn.addEventListener('click', stopSounds);
}





