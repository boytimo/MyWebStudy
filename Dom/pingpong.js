


const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#resetButton");
const winningScoreSlect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (p1Score !== winningScore) {
        console.log(`${p1Score} ${winningScore}`);

        p1Score += 1;
        //p1Display.textContent = p1Score;
        if (p1Score === winningScore && isGameOver === false) {
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');

            p1Button.disabled = true;
            p2Button.disabled = true;

            isGameOver = true;
        }
        p1Display.textContent = p1Score;
        //textContent -> 텍스트 값
    }

})

p2Button.addEventListener('click', function () {
    if (p2Score !== winningScore) {
        p2Score += 1;
        if (p2Score === winningScore && isGameOver === false) {
            // p2Display.style.color = 'green';
            // p1Display.style.color = 'red';
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            isGameOver = true;

            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }

})


winningScoreSlect.addEventListener('change', function (e) {
    console.log(e);
    reset();
    winningScore = parseInt(this.value); //문자여서 안됐었다
    console.log(winningScore);
})

resetButton.addEventListener('click', reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success', 'has-text-danger')
    // p2Display.style.color = 'black';
    // p1Display.style.color = 'black';

    p1Button.disabled = false;
    p2Button.disabled = false;
    isGameOver = false;
}



