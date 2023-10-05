const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

function createElement(elements, index) {
    const tag = elements[index].tag; 
    const text = elements[index].texto;

    const createTag = document.createElement(tag);
    const insertText = document.createTextNode(text);

    createTag.appendChild(insertText);

    const divElement = document.querySelector("div");
    divElement.appendChild(createTag);
}

for ( let i = 0; i < elementos.length; i++ ) {
    createElement(elementos, i);
}