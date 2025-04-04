//your JS code here. If required.
//const buttons = document.querySelectorAll(".btn");
//const stopbutton = document.queryselector(".stop");

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'stop'];
	const btns = Array.from(document.querySelectorAll(".btn"));
console.log(btns);


function playSounds(btn) {
    btn.addEventListener('click', () => {
		stopSound();
		documnet.getElementById(btn.innerText).play();
	})
}

function stopSounds(param) {
	for(let i=0; i<btns.length; i++)
		{
			const sound = document.getElementById(btns[i].innerText);
			console.log({sound});
			sound.pause();
			sound.currentTime = 0;
		}
}

  for(let i=0; i<btns.length; i++)
	  {
		  playSounds(btns[i]);
	  }

document.querySelector(".stop").addEventListener('click', () => {
	stopSounds();
})












