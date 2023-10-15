//const math = require('./3_math.js');
//파일을 참조하는 경우에는 ./를 붙여서 명시를
//해줘야한다.
//console.log(math);
//console.log(math.PI); // -> 3.14159
//console.log(math.square(9)) // -> 81

//const {PI, square} 도 가능 math.을 생략해서 PI 대입해서 출력

const { PI, square } = require('./3_math.js');

console.log(PI); // -> 3.14159
console.log(square(9)) // -> 81