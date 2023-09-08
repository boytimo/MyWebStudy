// Write your code in here: 그냥 연습 문제
const image = document.getElementById("unicorn");

const heading = document.getElementById("mainheading");

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:


const textColors = document.querySelectorAll('span');

let i = 0;



for (let text of textColors) {
    text.style.color = colors[i];
    console.log(text.style.color[i]);
    console.log(colors[i])
    i++;
}


// WRITE YOUR CODE IN HERE:

const highlights = document.querySelectorAll('li')

for (let highlight of highlights) {
    highlight.style.backgroundColor = '#7FDBFF'

}

const highlights2 = document.queySelectorAll('li.highlight');

for (let highlight2 of highlights2) {
    highlight2.a

}



