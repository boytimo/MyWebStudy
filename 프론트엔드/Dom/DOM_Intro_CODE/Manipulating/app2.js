//클래스 이름으로도 선택 가능하지만 더 좋은 방법이 있다.
//문법 통일 (클래스, 태그, ID 등등)
//querySelector

//console.log()

console.log(document.querySelector('p'));

console.log(document.getElementsByTagName('p'));

//(#~) ID 선택자
console.log(document.querySelector('#toc'))

//(.~) Class 선택자
console.log(document.querySelector('.square'))

console.log(document.querySelector('a[href="/wiki/Java"]'))
//a 태그 속성

console.log(document.querySelector('a[title="Java"]'))
//a 태그 속성

//querySelectorAll 일치하는 모든 문단을 찾아줌
//querySelector는 첫 번째 일치 값만 나옴
console.log(document.querySelectorAll('p'));
console.log(document.querySelector('p'));

console.log(document.querySelectorAll('a'));
console.log(document.querySelectorAll('p a'));
// p에 종속 되어있는 a태그

const links = document.querySelectorAll('p a');
for (let link of links) {
    console.log(link.href);
    //p에 종속되어있는 a태그에 안에 있는 href 링크 출력
}

toc = document.querySelector('#toc')

