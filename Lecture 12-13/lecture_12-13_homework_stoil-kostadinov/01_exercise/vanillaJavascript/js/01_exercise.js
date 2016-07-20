/**
 * Lecture 12-13 Homework
 * Exercise 1
 *
 * Навигация с падащи менюта при клик. Падащите менюта да се скриват при повторен клик или клик извън менюто. Да се направят два варианта, едни с jQuery и един без jQuery.
 *
 */

'use strict';
// Variant 1
/*let dropdown = document.querySelectorAll('.dropdown'),
	dropdownArray = Array.prototype.slice.call(dropdown,0);

dropdownArray.forEach(function (element) {
	let toggleButton = element.querySelector('a.toggle'),
		subMenu = element.querySelector('ul.dropdown-menu');

	toggleButton.addEventListener('click', function (e) {
		e.preventDefault();
		if (!subMenu.classList.contains('show')) {
			subMenu.classList.add('show');
			this.classList.add('active');
		}else {
			subMenu.classList.remove('show');
			this.classList.remove('active');
		}
	});
});*/


// Variant 2

const nav = document.getElementById('navUl'),
	  dropDownMenusObject = nav.querySelectorAll('.dropdown-menu'),
	  menuTogglesObject = nav.querySelectorAll('a.toggle');

nav.addEventListener('click',   function(event) {
	event.preventDefault();
	let target = event.target;
	toggleDropDown(target)
});

function toggleDropDown(target) {
	if (target.classList.contains('toggle')) {
		let listElementObject = target.parentElement.children,
			currentDropDownMenu = listElementObject[1],
			toggleBtn = target;

		if (!currentDropDownMenu.classList.contains('show')) {
			hideAllDropDowns(dropDownMenusObject);
			hideActiveClass(menuTogglesObject);
			currentDropDownMenu.classList.add('show');
			toggleBtn.classList.add('active');
		}else {
			currentDropDownMenu.classList.remove('show');
			toggleBtn.classList.remove('active');
		}

	}
}
function hideAllDropDowns(menusObject) {
	for (let i of menusObject) {
		i.classList.remove('show');
	}
}
function hideActiveClass(menuToggles) {
	for (let i of menuToggles) {
		i.classList.remove('active');
	}
}
window.addEventListener('click', function (e) {
	if (e.target.nodeName !== 'A') {
		hideAllDropDowns(dropDownMenusObject);
		hideActiveClass(menuTogglesObject);
	}
});