
String.prototype.yell = function () {
    return `OMG ${this.toUpperCase()} !!`;
}
//"ss".yell() -> 문자 출력 

Array.prototype.pop = function () {
    return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"
}
//[3,4,5].pop -> 문자 출력

//메서드나 특성을 추가하는 실제 객체 이다.
//템플릿 객체, 즉 프로토타입이다
