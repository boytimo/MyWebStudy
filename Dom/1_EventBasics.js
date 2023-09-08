const btn = document.querySelector('#v2');
//자바스크립트 alert -> 경고창 띄우기
btn.onclick = function () {
    console.log("You Clicked Me")
    console.log("I HOPE I WORKED")
}

console.dir(btn);

function scream() {
    console.log("AHAHAHAHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;
//마우스가 버튼을 지나가면 실행하는 함수

//const h1 = document.querySelector('h1');

// document.querySelector('h1').onclick = function () {
//     console.log("h1 bye");
// }

document.querySelector('h1').onclick = () => {
    console.log("h1 bye");
}

const btn3 = document.querySelector('#v3');
//(이벤트타입, 실행할 함수)
btn3.addEventListener('dblclick', function () {
    console.log("CLICKED!")
})


function twist() {
    console.log("TWIST")
}
function shout() {
    console.log("SHOUT")
}

const tasButton = document.querySelector('#tas');

tasButton.onclick = twist;
tasButton.onclick = shout;
//하나 이상은 안됨 shout만 출력함 (color도 하나만 되듯이 )

tasButton.addEventListener('click', twist, { once: true })
//{once:true}적용하니깐 twist랑 shout 한 번만 실행하고 shout만 실행
tasButton.addEventListener('click', shout)
//addEventListener는 2개 실행 가능