//자바 스크립트로 컨텐츠 추가

console.log(document.createElement('img'));

const newImg = document.createElement('img')

console.dir(newImg) //src 주소가 비어있음

newImg.src = 'https://i3.ruliweb.com/img/19/03/19/1699535c04321dbad.png'

document.body.appendChild(newImg)
//newImg를 body의 마지막 자식으로 추가

newImg.classList.add('square') // 클래스 추가

const newH3 = document.createElement('h3');

newH3.innerText = 'I am New!!';

document.body.appendChild(newH3) //h3를 body의 마지막 자식으로 추가

//append로 컨텐츠 추가하는 방법

const p = document.querySelector('p');

p.append('I am New text YaaY!');
//body의 첫 번째 p 텍스트에 가로 안 글 추가

//prepend 앞에 붙이다
const NewB = document.createElement('b');
NewB.append('Hi ..');

p.prepend(NewB) //p 맨 앞 문단에 추가

//insertAdjacentElement
const h2 = document.createElement('h2');
h2.append("Are adorable chickens");
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', h2) //(위치, 변수)

const h3 = document.createElement('h3')
h3.innerText = 'I am h3';

let button;
k3 / a