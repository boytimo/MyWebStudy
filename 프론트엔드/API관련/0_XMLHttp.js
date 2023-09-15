
//스타워즈 API사용

// "https://swapi.dev/api/people/1/"

//XLMHttp 방식은 옛날 방식이다.

const req = new XMLHttpRequest(); //객체 생성

//두가지 이벤트 중에 오류가 발생하지 않으면 실행
req.onload = function () {
    console.log("IT LOADED!")
    //console.log(this)
    //요청 객체인 this도 똑같이 삽입
    console.log(this.responseText)

    //JSON.parse로 responseText를  javascript객체로 변환
    const data = JSON.parse(this.responseText);
    console.log(data);

    console.log(data.name);
    console.log(data.height)
}

//오류가 발생할 때 실행된다
req.onerror = function () {
    console.log("ERROR")
    console.log(this)
    //요청 객체인 this도 똑같이 삽입
}

req.open("GET", "https://swapi.dev/api/people/1/") //open을 사용해서 연다
req.send();

//그래서 사용하는 방식이 "FETCH"

