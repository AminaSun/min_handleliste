console.log ('attribute');

const h1Element = document.querySelector('h1'); //henter h1 element fra html attributesheeten 

h1Element.id = '128736' //gamle metoden
h1Element.setAttribute(id, 'idbyset'); //nyere måte - beste måten

console.log(h1Element);

const pElement = doucment.querySelector('p');

console.log(pElement); 
