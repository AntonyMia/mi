const nav =
	document.querySelector(
		'.nav'
	); /*teraz jak wstawimy zmienną nav, to będzie ona oznaczała całego diva z klasą nav*/
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
	nav.classList.toggle('nav--active');
	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});
	handleNavItemsAnimation();
	deleteAnimation();
};
const handleNavItemsAnimation = () => {
	let delayTime = 3;
	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};
navBtn.addEventListener('click', handleNav);
const deleteAnimation = () => {
	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			allNavItems.forEach((item) => {
				item.classList.remove('nav-items-animation');
			});
		});
	});
};
// const nav = document.querySelector('.nav')
// const navBtn = document.querySelector('.burger-btn')
// const allNavItems = document.querySelectorAll('.nav__item')

// const handleNav = () => {
// 	nav.classList.toggle('nav--active')

// 	allNavItems.forEach(item => {
// 		item.addEventListener('click', () => {
// 			nav.classList.remove('nav--active')
// 		})
// 	})

// 	handleNavItemsAnimation()
// 	deleteAnimation()
// }

// const handleNavItemsAnimation = () => {
// 	let delayTime = 0

// 	allNavItems.forEach(item => {
// 		item.classList.toggle('nav-items-animation')
// 		item.style.animationDelay = '.' + delayTime + 's'
// 		delayTime++
// 	})
// }

// navBtn.addEventListener('click', handleNav)

// const deleteAnimation = () => {
// 	allNavItems.forEach(item => {
// 		item.addEventListener('click', () => {
// 			allNavItems.forEach(el => {
// 				el.classList.remove('nav-items-animation')
// 			})
// 		})
// 	})
// }
