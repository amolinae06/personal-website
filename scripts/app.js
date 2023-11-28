particlesJS.load('particles-js','assets/particles.min.json')

const typed = new Typed('#typed', {
	strings: ["\"Man of few words, ^400 aren't you?\""],
	typeSpeed: 60,
	cursorChar: '|',
	onComplete() {
		typed.cursor.remove();
      }
});

function PlayRollSound(soundobj) {
	var thissound = document.getElementById(soundobj);
	thissound.play();
}

function PlayClickSound(soundobj) {
	var thissound = document.getElementById(soundobj);
	thissound.play();
}