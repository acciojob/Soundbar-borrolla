//your JS code here. If required.
let currentAudio;
function playSound(soundName){
	stopAllSounds();//stop any current audio play
	currentAudio = new Audio(`sounnds/${soundName}.mp3`);
	currentAudio.play();
}

function stopAllSounds(){

 if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
	
}











