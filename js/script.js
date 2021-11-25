document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.nav');
	const navMenu = document.querySelector('.nav__items');
	const allNavItems = document.querySelectorAll('.nav__item');
	const navBars = document.querySelector('.nav__bars');
	const footerYear = document.querySelector('.footer__year');

	function addShadow() {
		if (window.scrollY >= 50) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	allNavItems.forEach((item) =>
		item.addEventListener('click', () => navMenu.classList.remove('show-menu'))
	);
	allNavItems.forEach((item) =>
		item.addEventListener('click', () => navBars.classList.remove('dark-bars'))
	);

	const showMenu = () => {
		navMenu.classList.toggle('show-menu');
		navBars.classList.toggle('dark-bars');
	};

	const handleCurrentYear = () => {
		const year = new Date().getFullYear();
		footerYear.innerText = year;
	};
	handleCurrentYear();
	navBars.addEventListener('click', showMenu);
	window.addEventListener('scroll', addShadow);
});
