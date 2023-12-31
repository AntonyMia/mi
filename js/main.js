const lime = document.querySelector('.lime');
const blue = document.querySelector('.blue');
const gold = document.querySelector('.gold');
const orange = document.querySelector('.orange');
const red = document.querySelector('.red');
const infoRed = () => {
	console.log('%ckod, który jest supernadrzędny', 'color: red; text-transform: uppercase');
};
const infoOrange = () => {
	// e.stopPropagation();
	console.log('%ckod, który jest nadrzędny', 'color: orange; text-transform: uppercase');
};
const infoLime = () => {
	// e.stopPropagation();
	console.log('%ckod, którego nie chcemy wykonać nr2', 'color: lime; text-transform: uppercase');
};

const infoBlue = () => {
	// e.stopPropagation();
	console.log('%ckod, którego nie chcemy wykonać nr1', 'color: royalblue; text-transform: uppercase');
};
const infoGold = () => {
	// e.stopPropagation();
	console.log('%c chcemy wykonać ten kod', 'color: gold; text-transform: uppercase');
};
red.addEventListener('click', infoRed);
orange.addEventListener('click', infoOrange);
lime.addEventListener('click', infoLime);
blue.addEventListener('click', infoBlue);
gold.addEventListener('click', infoGold);
