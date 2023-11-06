const navMobile =
	document.querySelector(
		'.nav-mobile'
	); /*zmiennej navMobile przyporządkujemy, po przeszukaniu całego dokumentu elemnty z klasą .nav-mobile*/
const navBtn =
	document.querySelector(
		'.hamburger'
	); /*zmiennej navBtn przyporządkujemy, po przeszukaniu całego dokumentu elemnty z klasą .hamburger*/
const footerYear = document.querySelector('.footer__year');
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

/*piszemy funkcję, która będzie wykrywała zdarzenie klika na nasz przycisk, i jak wykryje tego klika, to się wykona funkcja handleNav. Teraz nad kodem "navBtn.addEventListener('click', handleNav)"" stworzymy sobie tę funkcję handleNav. Ta funkcja handleNav będzie dodawała i odejmowała klasę .is-active w burgerze - to o czym mówili w instruktarzu dodawania gotowego hemburgera, jako krok czwarty na stronie https://github.com/jonsuh/hamburgers */
handleNav = () => {
	navBtn.classList.toggle('is-active');
};
navBtn.addEventListener('click', handleNav);
