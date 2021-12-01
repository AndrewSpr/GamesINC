const burgerIcon = document.querySelector('.mobile-icon')
const bodyMenu = document.querySelector('.mobile')
if (burgerIcon) {
	burgerIcon.addEventListener('click', function name() {
		bodyMenu.classList.toggle('_active')
		burgerIcon.classList.toggle('_active')
	})
}
