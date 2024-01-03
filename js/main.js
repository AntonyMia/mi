const test = () => {
	console.log(`dupa`);
};
setTimeout(test, 5000);
const test2 = () => {
	for (let i = 0; i < 5; i++) {
		console.log(`Liczba do przepracowania to wciąż ${i} dni`);
	}
};
test2();
setTimeout(test2, 1000);
