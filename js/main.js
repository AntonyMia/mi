const numerals = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 11, 23, 45, 67];
for (const numeral of numerals) {
	if (numeral > 2 && numeral < 4) console.log(`Liczba ${numeral} jest z przedziału 2 a 4`);
	else if (numeral < 2 && numeral > -3) console.log(`Liczba ${numeral} jest z przedziału -3 a 2`);
	else if (numeral > 4 && numeral < 68) console.log(`Liczba ${numeral} jest z przedziału 4 i 68`);
}

// let x = 33;
// do {
// 	x -= 5;
// 	console.log(x);
// } while (x < 33 && x > 0);
