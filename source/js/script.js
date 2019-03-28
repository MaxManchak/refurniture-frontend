'use strict';
@@include( "./components/wow.js" )
new WOW().init();

$('.spoiler__header').on('click', function(e) {
	e.preventDefault();

	if ($(this).parent().hasClass('active')) {
		$('.spoiler').removeClass('active');
		$('.spoiler__body').hide();
	} else {
		$('.spoiler').removeClass('active');
		$('.spoiler__body').hide();
		$(this).next().show();
		$(this).parent().addClass('active');
	}
});

$('.gallery-tabs__list a').on('click', function(e) {
	e.preventDefault();
	var href = $(this).attr('href');

	if ($(this).parent().hasClass('active')) {
		$(this).closest('.gallery-tabs__list').toggleClass('open');
	} else {
		$('.gallery-tabs__list li').removeClass('active');
		$('.gallery-tabs__tab').removeClass('active');
		$(this).closest('.gallery-tabs__list').removeClass('open');
		$(href).addClass('active');
		$(this).parent().addClass('active');
	}
});

$('.menuToggle').on('click', function(e) {
	e.preventDefault();

	if ($(this).hasClass('open')) {
		$(this).removeClass('open');
		$('.header__nav').removeClass('active');
		$('body').removeClass('fixed');
	} else {
		$(this).addClass('open');
		$('.header__nav').addClass('active');
		$('body').addClass('fixed');
	}
});

$('.form-group input').on('change', function() {
	if ($(this).val() !== '') {
		$(this).prev().addClass('active');
	} else {
		$(this).prev().removeClass('active');
	}
});

$('.form-group textarea').on('change', function() {
	if ($(this).val() !== '') {
		$(this).prev().addClass('active');
	} else {
		$(this).prev().removeClass('active');
	}
});

$('.form-group input')
	.focus(function() {
		console.log('focus');
		$(this).prev().addClass('active');
	})
	.focusout(function() {
		if ($(this).val() === '') {
			$(this).prev().removeClass('active');
		}
	});

$('.form-group textarea')
	.focus(function() {
		console.log('focus');
		$(this).prev().addClass('active');
	})
	.focusout(function() {
		if ($(this).val() === '') {
			$(this).prev().removeClass('active');
		}
	});
