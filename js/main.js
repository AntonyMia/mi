const msg = 'Testowa wiadomość';
console.log(msg.length);
const air = 'Powiedz mi co jesz zazwyczaj na śniadanie';
console.log(air.toUpperCase());
const airport = 'Napisz jakie plany masz na chwilę obecną';
console.log(airport.toUpperCase());
console.log(airport.length);
const airport1 = airport.toUpperCase();
console.log(airport1);
console.log(airport1.toLowerCase());
const flower = 'LILLY';
console.log(flower.toLowerCase());
const date = new Date();
console.log(date);
console.log(date.toLocaleDateString('en'));
const userName = 'maciej';
console.log(userName);
const userName1 = userName.charAt(0).toUpperCase() + userName.slice(1);
console.log(userName.slice(1));
console.log(userName1);
const surname = 'Bieniek';
const surname1 = surname.charAt(0) + surname.slice(1) + surname.slice(1);
console.log(surname1);
console.log(surname.slice(1));
console.log(surname1);
const airportName = 'warsawairport';
const airportName1 = airportName.charAt(0).toUpperCase() + airportName.slice(1, 13);
console.log(airportName1);
const companyName = 'My ability to spend';
const companyName1 = companyName.charAt(0).toUpperCase(0) + companyName.slice(1);
const message = '" Hi, we have just arrived          "';
console.log(message);
console.log(message.trim());
const str1 = 'Breaded Mushrooms';
console.log(str1);
const str2 = str1.padEnd(19, '.');
console.log(str2);

const text1 = 'powiększ mnie!';
console.log(text1.toLocaleUpperCase());
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI';
console.log(text2.toLowerCase());
const text3 = '$#%#^ wytnij te dziwne znaki na początku!';
console.log(text3.slice(6));
const text4 = 'sprawdź, czy zawieram słowo "czy"';
console.log(text4.includes('czy'));
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"';
console.log(text5.charAt(2));
const text6 = 'pies zamień każde słowo pies, na słowo kot pies';
console.log(text6.replaceAll('pies', 'kot'));
const text7 = 'podziel, ten, string, od, przecinków';
console.log(text7.split(','));
const num1 = 23;
const num2 = '45';
console.log(num1 + num2);
const num3 = 0;
console.log(num3 / 0);
const num4 = 3344.555;
console.log(num4.toFixed(2));
const num5 = '123';
console.log(parseInt(num5));
const num6 = '234';
console.log(num6);
console.log(parseInt(num6));
const num7 = 3.1415927;
console.log(num7.toFixed(3));
if (' ') {
	console.log('true');
} else {
	console.log('false');
}
let a = null;
console.log(a);
const colors = [false, '1234', 1234, null, [23]];
console.log(colors);
const classes = ['1a', '1b', '1c', '1d'];
console.log(classes);
const colors1 = ['red', 'green', 'blue'];
console.log(colors1);
function test() {
	console.log('Cześć, to jest test');
}
test();

function relax() {
	console.log(34 + 34);
}
relax();

function study() {
	console.log('Please provide the number of students:');
}
study();
function ksiazCastle() {
	console.log('The new price list being prepared', 34);
}
ksiazCastle();
function payList() {
	console.log('The paylist may be provided soon.');
}
payList();
const person = {
	name: 'Klaudia',
	age: 23,
	favColor: null,
};
console.log(person);
const cities = {
	Manchester: 30000,
	London: 1200000,
	Warsaw: 2300,
	Lublin: null,
};
console.log(cities);

const cities1 = ['Manchester', 'London', 'Warsaw', 'Lublin'];
console.log(cities1);
function cities2() {
	console.log('Manchester', 'Warsaw', 'London', 'Lublin');
}
cities2();
const employees = {
	name: 'Bohdan',
	age: 45,
	position: 'mechanic',
	salary: 1200,
};
console.log(employees);

function employees1() {
	console.log('Bohdan aged 45 is a mechanic earning 1200 euros/month.');
}
employees1();
const employees3 = ['Bohdan', 45, 'mechanic', 1200];
console.log(employees3);
const x = 5;
const y = 4;
const add = x + y;
console.log(add);
let z = 5;
z++;
z++;
z++;
console.log(z);
let a1 = 10;
z--;
console.log(a1);
const modulo = 45 % 8;
console.log(`Reszta z dzielenie 45/8 wynosi ${modulo}`);
let c = 10;
let d = 11;
d %= c;
console.log(d);
console.log(10 === '10');
console.log('10' != 10);
console.log('10' !== 10);
console.log(10 >= 5);
console.log(200 <= 201);
if (!(5 < 6 && 10 > 9)) {
	console.log(`To nie jest prawidłowe rozwiązanie`);
} else {
	console.log(`To jest prawidłowe rozwiązanie`);
}
if (4 > 5 || 10 < 45) {
	console.log(`OK`);
} else {
	console.log('not properly');
}
if (54 < 100 && 23 < 23) {
	console.log('OK');
} else {
	console.log('not OK');
}
const pass = '3342784';
if (pass.length>20 && pass.includes("!")) console.log(`Masz dobre hasło`);
else if (pass.length<20 && pass.length>10 && pass.length.includes("!"))
console.log(`Masz średnie hasło`);
else if (pass.length<10 && pass.charAt(0)==3)
{console.log(`Masz słabe hasło, z dobrym początkiem`);}
else {
	console.log(`Masz słabe hasło`);
}
