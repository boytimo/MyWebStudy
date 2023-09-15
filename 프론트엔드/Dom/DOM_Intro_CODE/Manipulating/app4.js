//console.log()
//속성
document.querySelector('#banner').id = "whoops";
document.querySelector('#whoops').id = "banner"

const firstLink = document.querySelector('a');
console.log(firstLink.href);
console.log(firstLink.getAttribute('href'));

console.log(firstLink.title);
console.log(firstLink.getAttribute('title'));

firstLink.setAttribute('href', 'https://google.com');
//get 가져오고 set 세팅

//console.log(document.querySelectorAll('input')[1]
const input = document.querySelector('input[type="text"]');
//querySelectorAll로 하면 setAttribute 실행 X

input.type = 'color'
input.setAttribute('type', 'text');  //input type을 text로 전환 

const h1 = document.querySelector('h1');

console.log(h1.style);
//가장 큰 차이점은 카멜케이스?
//font size의 경우 fontSize로 카멜케이스
//스타일 객체에서는
//스타일 시트를 정의해주지 않는 한 현재 스타일이
//나타나지 않곤 한다.
//이 style 객체에 스타일 시트에서 지정한 스타일이 포함되지 않았죠


//css 파일 말고 html에 style 설정하니깐 
console.log(h1.style.color)//-> 색 출력 아니면 빈 문자열 나왔음
//객체의 목록과 다양한 특성들은 따로 지정하거나 인라인으로 설정하지
//않으면 빈문자열로 나옴 

//style 객체를 이용해서 값을 변경하는 방법도 있음
h1.style.color = 'green';
h1.style.fontSize = '50px'
h1.style.border = '2px solid pink'
//자바 스크립트를 사용해서 인라인 스타일을 사용 (선호되는 방법 X)

console.log(window.getComputedStyle(h1).color)
console.log(window.getComputedStyle(h1).fontSize)
//h1 정보 출력

const imgs = document.querySelector('img')



//연습 문제 ' ' 주의
// const container = document.querySelector('#container');

// container.style.textAlign = 'center';

// const image = document.querySelector('img')

// image.style.width = '150px'

// image.style.borderRadius = '50%';