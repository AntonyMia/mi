const test1 = document.querySelector('div.yellow');
console.log(test1);
console.log(test1.innerText);
test1.innerText = '<div> antisocial</div>';
console.log(test1.innerText);
test2 = document.querySelector('p.inner-text');
console.log(test2);
test3 = document.querySelector('p.text-content');
console.log(test3);
console.log(test2.innerText);
console.log(test3.textContent);
test4 = document.querySelector('p.young');
console.log(test4);
console.log(test4.textContent);
test4.textContent = ' - Taka była wola większości na walnym zgromadzeniu. Część wędkarzy od dłuższego czasu .';
console.log(test4.textContent);
const input = document.querySelector('input');
const underInput = document.querySelector('.under-input')