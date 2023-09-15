//class 팩토리 함수 

// function hex(r, g, b) {//rgb 컬러를 16진수 변환하는 코드
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// hex(255, 100, 25);

// function rgb(r, g, b) {
//     return `rgb (${r},${g},${b})`
// }

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;

//     color.rgb = function () {
//         const { r, g, b } = this;

//         return `rgb (${r},${g},${b})`
//     }

//     color.hex = function () {//rgb 컬러를 16진수 변환하는 코드
//         return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
//     }

//     return color;
// }

// const firstColor = makeColor(35, 255, 150);
// const secondColor = makeColor(35,255,150);
// firstColor.rgb();
// firstColor.hex();

// firstColor.hex == secondColor.hex
// -> false

// "hi".slice == "bye".slice
// -> true

//-------------------------------------------------------

//모든 배열은 하나의 프로토타입 배열 객체에서
//자신만의 내장된 객체 메서드를 갖는다.
//거기에는 우리가 사용해왔던 모든 메서드와 기능이 포함된다

// function Color(r,g,b){
//     //const o = {}
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     console.log(this);

//     this.rgb = function() {
//         return `rgb(${r},${g},${b})`;
//     }
//     //return o
// }

// Color.prototype.hex = function(){ //prototype으로 바꿔서 쓸 수 있다
//     return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
// }

// Color.prototype.rgba = function(a = 1.0){
// //주의할 점은 화살표 연산자를 사용하지 않는 것이다.
// //this 키워드로는 다르게 행동하기 때문이다.

//     const {r,g,b} = this;
//     return `rgba(${r},${g},${b},${a})`
// }

// Color(255,2,5); //-> 윈도우 객체 출력
// //다른 객체 안에 있는게 아니라
// //전체 범위에서 참조를 하면서 가장 가까운 window 객체를 참조

// a = new Color(255,2,5); //-> Color {r: 255, g: 2, b: 5} 
// //new -> 새로운 객체 생성 
// //배열 o가 암시적으로 수행된다

// console.log(a.rgb()); // -> rgb(255,2,5)
// console.log(a.hex()); // -> #ff0205

// b = new Color(255,2,5); 

// // a.hex == b.hex (프로토타입에 정의 되어있어서 true)
// // true

// // a.rgb == b.rgb
// // false

// document.body.style.backgroundColor = a.rgba(0.5);

// -----------------------------------------------------------------

class Color { //클래스 생성자 함수는 앞에 대문자(룰)
    constructor(r, g, b, name) { //constructor -> 건설자/생성자
        console.log(r, g, b, name);
        this.r = r;
        this.g = g;
        this.b = b;
        this.calCHSL();
        this.name = name;
    }

    greet() { //Color.prototype.greet 와 같다
        return `HELLO FROM ${this.name}`;
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r},${g},${b}`
    }

    color() {
        //const { r, g, b } = this;
        //return `rgba(${r},${g},${b})`
        return `rgb(${this.innerRGB()})`
    }

    hex() {
        return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }

    rgba(a = 1.0) { // a 투명도
        //const { r, g, b } = this;
        //return `rgba(${r},${g},${b},${a})`

        return `rgba(${this.innerRGB()},${a})`
    }

    hsl() {
        const { h, s, l } = this;
        return `hsl(${h},${s}%,${l}%)` //색조, 채도, 명도
    }

    opposite() {
        const { h, s, l } = this;

        const newHue = (h + 180) % 360
        return `hsl(${newHue},${s}%,${l}%)`
    }

    fullySaturated() { //채도 100%로 설정하는 함수
        const { h, l } = this;
        return `hsl(${h},100%, ${l}%)`
    }

    calCHSL() { //색도 채도 명도를 구하는 함수
        //c1.calCHSL()
        let { r, g, b } = this;


        r /= 255;
        g /= 255;
        b /= 255;

        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;



        if (delta == 0) h = 0;

        else if (cmax == r) {
            h = ((g - b) / delta) % 6;
        }

        else if (cmax == g) {
            h = (b - r) / delta + 2;
        }

        else {
            h = (r - g) / delta + 4;
        }
        h = Math.round(h * 60);

        if (h < 0) h += 360;

        l = (cmax + cmin) / 2;

        s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        this.h = h;
        this.s = s;
        this.l = l;
    }
}

const c1 = new Color(255, 67, 89, "tomato");
console.log(c1);
console.log(c1.greet()) //-> HELLO FROM tomato

const c2 = new Color(255, 255, 255, "white");
console.log(c2)
console.log(c2.hex())

// c1.hex == c2.hex
// true

console.log(c2.color())

document.body.style.backgroundColor = c2.color();

const c3 = new Color(230, 126, 34, 'carrot')

document.body.style.backgroundColor = c3.color();

document.body.style.backgroundColor = c3.fullySaturated();

document.body.style.backgroundColor = c3.opposite();







