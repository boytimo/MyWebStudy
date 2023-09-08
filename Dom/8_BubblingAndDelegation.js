const button = document.querySelector('#changeButton');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = randomColor();
    e.stopPropagation();
})

//toggle -> add() 와 remove()를 스위치 처럼 사용
container.addEventListener('click', function () {
    container.classList.toggle('hide');
})

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}