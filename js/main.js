const footer = document.querySelector('.footer');
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

/*piszemy funkcję, która będzie wykrywała zdarzenie klika na nasz przycisk, i jak wykryje tego klika, to się wykona funkcja handleNav. Teraz nad kodem "navBtn.addEventListener('click', handleNav)"" stworzymy sobie tę funkcję handleNav. Ta funkcja handleNav będzie dodawała i odejmowała klasę .is-active w burgerze - to o czym mówili w instruktarzu dodawania gotowego hemburgera, jako krok czwarty na stronie https://github.com/jonsuh/hamburgers ; linijka: navMobile.classList.toggle('nav-mobile--active') natomiast dodaja/odejmuje do elementu z klasą  .nav-mobile, który jest przedstawiony za pomocą zmiennej navMobile, klasę nav-mobile-active. Ta klasa powoduje, element z tą klasą będzie miał pozycje 0 na osi X, czyli powróci z zaświatów  - to widać na linijce 123 main: &--active {
				transform: translateX(0%);
			}*/
handleNav = () => {
	navBtn.classList.toggle(
		'is-active'
	); /*uwaga, tu nie dodajemy kropki, jak na górze*/
	navMobile.classList.toggle('nav-mobile--active');
	if (navMobile.classList.contains('nav-mobile--active')) {
		/*fragment kodu mający na celu ukrycie footera podczas gdy pojawia się klasa 'nav-mobile--active'*/
		footer.style.display = 'none';
	} else {
		footer.style.display = 'block';
	}
};
navBtn.addEventListener('click', handleNav);
