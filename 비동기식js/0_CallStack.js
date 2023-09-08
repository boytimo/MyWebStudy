//http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbXVsdGlwbHkoeCx5KXsNCiAgICByZXR1cm4geCp5Ow0KfQ0KDQpmdW5jdGlvbiBzcXVhcmUoeCl7DQogICAgcmV0dXJuIG11bHRpcGx5KHgseCk7DQp9DQoNCmZ1bmN0aW9uIGlzUmlnaHRUcmlhbmdsZShhLGIsYyl7DQogICAgcmV0dXJuICBzcXVhcmUoYSkgKyBzcXVhcmUoYikgPT09IHNxdWFyZShjKTsNCn0NCg0KaXNSaWdodFRyaWFuZ2xlKDMsNCw1KQ%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// const multiply = (x,y) => x*y;

// const square = x => multiply(x,x);



// const isRightTriangle = (a,b,c) => (  
//     //전달한 세 개의 선이 유효한 직각삼각형을 나타내는지 알려주는 함수
//     //a^2 + b^2 = c^2   
//     square(a) + square(b) === square(c);
// )

function multiply(x, y) {
    return x * y;
}

function square(x) {
    return multiply(x, x);
}

function isRightTriangle(a, b, c) {
    return square(a) + square(b) === square(c);
}

isRightTriangle(1, 2, 5);

// Call Stack 여러 함수를 호출하는 스크립트에서 해당 위치를 추적한다
// 자바스크립트가 위치를 알 수 있고 책 속의 손가락 같은 거
// 스크립트가 함수를 호출하면 해석기는 콜 스택에 추가
// 그리고 실제 그 함수를 수행하기 시작
// 첫 번째 함수가 호출한 다른 함수도 콜 스택에 추가되어 호출되면 실행

