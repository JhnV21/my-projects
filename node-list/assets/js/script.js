const paragraphs = document.querySelector('.node');
const pTexts = paragraphs.querySelectorAll('p');

const bodyStyles = getComputedStyle(document.body);
const backgroundBodyColor = bodyStyles.backgroundColor;

for (const p of pTexts) {
    p.style.backgroundColor = backgroundBodyColor;
    p.style.color = 'rgb(255, 255, 255)'
}