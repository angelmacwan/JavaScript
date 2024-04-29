document.querySelector('#p1').style.display = 'block';
let current_window = 1;

function logMouse(event) {
	let width = window.innerWidth;
	let pressX = event.clientX;
	if (pressX < width / 3) previousSlide();
	else nextSlide();
}

function nextSlide() {
	if (current_window >= 6) return;
	document.querySelector(`#p${current_window}`).style.display = 'none';
	current_window++;
	document.querySelector(`#p${current_window}`).style.display = 'block';
}

function previousSlide() {
	if (current_window == 1) return;
	document.querySelector(`#p${current_window}`).style.display = 'none';
	current_window--;
	document.querySelector(`#p${current_window}`).style.display = 'block';
}
