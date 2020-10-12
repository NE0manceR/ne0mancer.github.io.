let arrowRight = document.querySelector('.next');
let arrowLeft = document.querySelector('.preve');
let slider = document.querySelector('.slider');
let line = document.querySelectorAll('.line');
let sliderPosition = -288
let sliderStatus = true
let lineStatus = 0


window.addEventListener('resize',()=>{
	sliderPosition = -288
	console.log('work')
	lineStatus = 0
	slider.style.transform = `translate(${sliderPosition}px)`
})


line[0].style.backgroundColor = "white"
arrowRight.addEventListener("click", () => {


	if (sliderStatus === true) {
		sliderStatus = false
		sliderPosition -= 290
		lineStatus++
		console.log(lineStatus)
		slider.style.transform = `translate(${sliderPosition}px)`
		setTimeout(() => {
			sliderStatus = true
			if (sliderPosition === -3768) {
				sliderPosition = -288
				slider.style.transition = "0s"
				slider.style.transform = `translate(${sliderPosition}px)`
				setTimeout(() => {
					slider.style.transition = "0.5s"
				}, 100);
			}
		}, 600);
		checkLine()

	}


});

arrowLeft.addEventListener("click", () => {
	if (sliderStatus === true) {
		sliderStatus = false
		sliderPosition += 290
		lineStatus--
		console.log(lineStatus)
		slider.style.transform = `translate(${sliderPosition}px)`
		setTimeout(() => {
			sliderStatus = true
			if (sliderPosition === 2) {
				sliderPosition = -3478
				slider.style.transition = "0s"
				slider.style.transform = `translate(${sliderPosition}px)`
				setTimeout(() => {
					slider.style.transition = "0.5s"
				}, 100);
			}

		}, 600);
		checkLine()
	}

})

function checkLine() {
	if (lineStatus == 4) {
		line[0].style.backgroundColor = "#C4C4C4"
		line[1].style.backgroundColor = "white"
	}
	if (lineStatus == 8) {
		line[1].style.backgroundColor = "#C4C4C4"
		line[2].style.backgroundColor = "white"
	}

	if (lineStatus == 12) {
		line[2].style.backgroundColor = "#C4C4C4"
		line[0].style.backgroundColor = "white"
		lineStatus = 0
	}

	if (lineStatus == -4) {
		line[2].style.backgroundColor = "white"
		line[0].style.backgroundColor = "#C4C4C4"
	}

	if (lineStatus == -8) {
		line[2].style.backgroundColor = "#C4C4C4"
		line[1].style.backgroundColor = "white"
	}

	if (lineStatus == -12) {
		line[1].style.backgroundColor = "#C4C4C4"
		line[0].style.backgroundColor = "white"
		lineStatus = 0
	}

}



