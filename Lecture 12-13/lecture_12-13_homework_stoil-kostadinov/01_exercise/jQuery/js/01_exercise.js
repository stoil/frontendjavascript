/**
 * Lecture 12-13 Homework
 * Exercise 1
 *
 * Навигация с падащи менюта при клик. Падащите менюта да се скриват при повторен клик или клик извън менюто. Да се направят два варианта, едни с jQuery и един без jQuery.
 *
 */

'use strict';
// Variant jQuery
$(document).ready(function() {
	let navUl = $('#navUl'),
		dropDownMenus = $('.dropdown-menu');

	navUl.on('click', 'a', function(e) {
		e.preventDefault();
		e.stopPropagation();
		let currentDropDown = $(this).next('.dropdown-menu');
		if (currentDropDown.hasClass('show')) {
			dropDownMenus.removeClass('show');
		} else {
			dropDownMenus.removeClass('show');
			currentDropDown.addClass('show');
		}
	});
	$(document).on('click', function () {
		dropDownMenus.removeClass('show');
	})
});
