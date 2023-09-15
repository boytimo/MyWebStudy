//console.log()
console.log(document.querySelector('h1'));


const h1 = document.querySelector('h1');
console.log(document.querySelector('p').innerText)
//객체의 모든 특성과 같은 값 검색
//document.querySelector('p').innerText = ".innerText로 값 변경 완료!"

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!'
}

document.querySelector('h1').innerText = '<i>샬롸샬롸</i>';
//-> <i> 까지텍스트 출력

document.querySelector('h1').innerHTML = '<i>샬롸샬롸</i>'
//-> html <i> 태그 적용

console.log(document.querySelector('p').innerHTML)
//-> html 태그 까지 출력해서 나옴

document.querySelector('h1').innerHTML += '<sup> 쌸롸쌸롸</sup>'
//추가

//연습 문제 대체 텍스트 <img alt> (검색 엔진 최적화)


