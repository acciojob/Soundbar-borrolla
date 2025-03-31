//your JS code here. If required.
//const buttons = document.querySelectorAll(".btn");
//const stopbutton = document.queryselector(".stop");
document.getElementById('sound1').addEventListener('click', function() {
  document.getElementById('sound1Audio').play();
});

document.getElementById('sound2').addEventListener('click', function() {
  document.getElementById('sound2Audio').play();
});

document.querySelector('.stop').addEventListener('click', function() {
  var sounds = document.getElementsByTagName('audio');
  for(i=0; i<sounds.length; i++) sounds[i].pause();
});