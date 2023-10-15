//exports 변수는 모듈의 파일 수준 범위 내에서
//사용할 수 있으며 모듈이 평가되기 전에
//module.exports의 값이 지장된다


//방법 1, 2
// const add = (x, y) => x + y;

// const PI = 3.14159;

// const square = x => x * x;

//module.exports = "Hello"
//module.exprots는 객체

//방법 1 
//3-1_math.js로 이동
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

//방법 2
// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }

// module.exports = math;

//방법 3

// module.exports.add = (x, y) => x + y;
// module.exports.PI = 3.14159;
// module.exports.square = x => x * x;

//방법 4
//module을 생략할 수 있다.
exports.add = (x, y) => x + y;
exports.PI = 3.14159;
exports.square = x => x * x;


//하지만 exports = "Hello"는 오류
//-> 문자열로 지정되었고 그냥 변수여서
//마음대로 바꿀 수 있게 되었기때문에