particlesJS.load('particles-js','assets/particles.json')

const typed = new Typed('#typed', {
	strings: ["\"Man of few words, ^400 aren't you?\""],
	typeSpeed: 60,
	cursorChar: '|',
	onComplete() {
		typed.cursor.remove();
      }
});