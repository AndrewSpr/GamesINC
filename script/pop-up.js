var modal = document.getElementById('pop-up')
var popUpbtn = document.getElementById('pop-up__btn')
var popUpclose = document.getElementsByClassName('close')[0]

popUpbtn.onclick = function () {
	modal.style.display = 'block'
}

popUpclose.onclick = function () {
	modal.style.display = 'none'
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none'
	}
}
