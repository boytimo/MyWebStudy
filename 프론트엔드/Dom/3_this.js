

// for (let button of buttons) {
//     button.addEventListener('click', function () {
//         button.style.backgroundColor = randomColor()
//         button.style.color = randomColor()
//     })
// }

// //h1 변경
// const h1s = document.querySelectorAll('h1');
// for (let h1 of h1s) {

//     h1.addEventListener('click', function () {
//         console.log(this);
//         console.log(h1);
//         //this = h1 출력
//         this.style.backgroundColor = randomColor();
//         this.style.color = randomColor();
//     })

// }

const buttons = document.querySelectorAll('button')
for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    console.log(this);
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}
//h1, button 호출마다 this 값 다름

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}