

const button = document.querySelector('button');

const h1 = document.querySelector('h1');

function change() {
    let color = randomColor();

    document.body.style.backgroundColor = color
    console.log(color)
    h1.innerText = color
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

button.onclick = change

console.log(document.querySelector('body'))
