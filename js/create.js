// variabel for container nav
const navElement = document.createElement('nav');

// variabel for ul list
const ulElement = document.createElement('ul');
// setter nav inn i header
// variabel som lagre verdi av html node av header
const headerElement = document.querySelector('header');
console.log(headerElement)
headerElement.append(navElement);

console.log(headerElement);

// setter ul inn i nav
navElement.append(ulElement);

console.log(headerElement);
// en eller flere variabler for list item
// setter en etter hverandre alle list iten (li) 

const li1Element = document.createElement('li');
li1Element.textContent = 'about';

ulElement.appendChild(li1Element);

const li2Element = document.createElement('li');
li2Element.textContent = 'products';
ulElement.appendChild(li2Element);

const li3Element = document.createElement('li');
li3Element.textContent = 'contacts';
ulElement.appendChild(li3Element);

console.log(headerElement);

