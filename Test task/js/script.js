'use strict';

// маска ввода номера телефона
$('input[name=phone]').mask("+7(999) 99-99-99");

// обработчик события - вызов модального окна
const submitCall = document.querySelector('.promo__call_us__descr'),
	  overlay = document.querySelector('.overlay'),
	  closeModal = document.querySelector('.modal__close');

submitCall.addEventListener('click', () => {
	overlay.classList.toggle('overlay_active');
});

// обработчик события - закрытие модального окна
closeModal.addEventListener('click', () => {
	overlay.classList.toggle('overlay_active');
});

// валидация фид-формы модального окна
function validateForms(form){
	$(form).validate({
		rules: {
			phone: "required"
			},
		messages: {
			phone: "Пожалуйста, введите ваш номер телефона"
			}
	});
}

validateForms('.feed-form');




// обработчик события - открытие и закрытие модального окна aside в мобильной версии
const plus = document.querySelector('.aside__plus'),
	  aside = document.querySelector('.aside'),
	  asideModal = document.querySelector('.aside__modal'),
	  asideModalOverlay = document.querySelector('.aside__modal__overlay'),
	  asideModalClose = document.querySelector('.aside__modal__close');

plus.addEventListener('click', () => {
	aside.style.cssText = 'display: none';
	asideModal.style.cssText = 'display: block';
	asideModalOverlay.style.cssText = 'display: block';
});

asideModalClose.addEventListener('click', () => {
	aside.style.cssText = 'display: flex';
	asideModal.style.cssText = 'display: none';
	asideModalOverlay.style.cssText = 'display: none';
});

// обработчик события - открытие и закрытие меню в мобильной версии
const hamburger = document.querySelector('.hamburger'),
	  mobileMenu = document.querySelector('.mobile__menu'),
	  mobileMenuClose = document.querySelector('.mobile__menu__close');

hamburger.addEventListener('click', () => {
	mobileMenu.style.cssText = 'display: block';
});

mobileMenuClose.addEventListener('click', () => {
	mobileMenu.style.cssText = 'display: none';
});




