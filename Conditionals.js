// const die1 = Math.floor(Math.random()*6) +1;
// const die2 = Math.floor(Math.random()*6) +1;
// //floor는 소수점 제거 Math.random은 0.~~출력

// console.log(`die1: ${die1} die2: ${die2} = ${die1+die2}`) //키보드~ `
// console.log("die1: "+die1+" die2: "+die2+" = "+(die1+die2))
//----------------------------------------------------
// const password = prompt("Please enter a new password");

// if (password.length >= 6) {
//   console.log("long enough password");

//   if (password.indexOf(" ") === -1)
//   {
//     console.log("Good job! No space!");
//   }
//   else
//   {
//     console.log("Password cannot contain spaces!");
//   }
// } else
// {
//   console.log("password too short! mus t be 6+ characters");
// }
//------------------------------------------
// const gameBoard = [
//   ["x", "0", "x"],
//   ["0", null, "x"],
//   ["0", "0", "x"],
// ];

// console.log(gameBoard);

//-------------------------------------------

// const kitchenSink = {
//   favnum: 923124,
//   isFunny: true,
//   colos: ["red", "orange"],
// };

// const person = {
//   firstName: "park",
//   lastName: "Jagger",
// };

// //호출
// person["firstName"];
// person["first"+"name"];
// person.firstName;
// person.lastName;

// kitchenSink["colors"];

// const years = { 1999: "Good", 2020: "Bad" };
// //객체에서 만드는 모든 키들은 문자열로 변환됨
// //기호 뺴고 모든 것은 문자열

// console.log(years["1999"]);
// console.log(person.firstName);
// console.log(years[2020])
// // console.log(years.2020) -> 안됨

// const dumb = {true: 'data',null: 'sslaslasl'}

// console.log(dumb["true"]);

// let birthyear = 2020;
// console.log(years[birthyear]);

//------------------------------------

// const midterms = { danielle: 96, thomas: 78 };

// //값 변경
// midterms.thomas = 42;
// console.log(midterms.thomas);

// midterms.danielle = "A+";
// midterms.thomas = "D";

// //추가
// midterms.alice = "B+";
// midterms["antonio"] = "A";
// console.log(midterms);
//------------------------------------------

// const comments = 
// [
//     {username: 'Tammy', text: 'lolololol',votes: 9},
//     {username: 'FishBoi', text: 'glub glub',votes: 2124}
// ]

// console.log(comments[0]);
//----------------------------------------
//숫자 맞추기 게임 

// let maximum = parseInt(prompt("Enter the maximum number"));
// //숫자가 아닌 문자를 만나면 변환을 중단하고 해당 숫자까지만 정수로 변환

// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"))
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);


// let guess = prompt("Enter Your first number! (type 'q' to quit)");

// let i = 0;

// while (guess !== targetNum) {

//     //문자열 하고 숫자를 어떻게 구별하지
//     while (!parseFloat(guess) && guess != 'q' || guess > 0) {
//         guess = prompt("Enter a valid number!");

//         if (guess === 'q') {
//             break;
//         }
//         else {
//             guess = parseFloat(guess);
//         }
//     }

//     if (guess > targetNum) {

//         guess = prompt("Too high! Enter a new guess");

//         if (guess === 'q') {
//             break;
//         }
//         else {
//             guess = parseFloat(guess);
//         }
//     }
//     else if (guess < targetNum) {
//         guess = prompt("Too low Enter a new guess");

//         if (guess === 'q') {
//             break;
//         }
//         else {
//             guess = parseFloat(guess);
//         }
//     }

//     if (guess !== 'q' && guess === targetNum) {
//         console.log("You Got It");
//         console.log(`try: ${i}`);
//     }

//     if (guess === 'q') {
//         console.log("Ok, You Quit");
//         guess = targetNum;
//     }

//     console.log(guess);
//     i++;
// }

//---------------------------------------------------------
// 반복문 

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }
// //cpp for(int sum: subreddits) 와 같음
// for (let sub of subreddits) {
//     console.log(sub);
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Anotonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// // for (let i = 0; i < seatingChart.length; i++) {
// //     const row = seatingChart[i];
// //     //console.log(seatingChart[i]);
// //     //console.log(row[i]);
// //     for (let j = 0; j < row.length; j++) {
// //         //row에 행 배열 저장 후 row 출력 
// //         console.log(row[j]);
// //     }
// // }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// for (let char of "hello world") {
//     console.log(char);
// }
//--------------------------------------
//키 반복문
// const testScores = {
//     keenan: 80,
//     damon: 69,
//     kim: 89,
//     shawn: 91,
//     marlon: 85,
//     dwayne: 72,
//     nadia: 52,
//     diedre: 62
// }

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

// console.log(Object.keys(testScores)); //키 이름
// console.log(Object.values(testScores)); // 키 내용

// let total = 0;
// let scores = 0;
// let scores2 = Object.values(testScores)

// for (let score of Object.values(testScores)) {
//     scores++;
//     total += score;
//     console.log(total);
// }

// console.log(total / scores);
// console.log(total / scores2.length)

//--------------------------------------------------
//함수

// let die1 = Math.floor(Math.random()*6) +1;

// function singSong()
// {
//     console.log("Do");
//     console.log("Re");
//     console.log("Mi");
// }

// function great(firstName)
// {
//     console.log(`Hey there ${firstName}`)                                                                                            }`)
// }
//------------------------------------------------------------
//함수2 

// function capitalize(a)
// {
//     let b = [];
//     for(let i = 0; i<a.length;i++)
//     {
//         if(i ===0)
//         {
//             b[0] = a[0].toUpperCase();
//         }
//         else
//         {
//             b += a[i];   //어이없게 문자열을 더해야 문자가 연결됨
//         }
//     }
//     console.log(b);

//     return b;
// }

// capitalize('eggplant') // "Eggplant"
// capitalize('pamplemousse') // "Pamplemousse"
// capitalize('squid') //"Squid"

//---------------------------------------
//자바스크립트 스위치문
// function returnDay(day) {
//     switch (day) {

//         case 1:
//             {
//                 return "Monday";
//             }
//         case 2:
//             {
//                 return "Tuesday";
//             }
//         case 3:
//             {
//                 return "Wednesday";
//             }
//         case 4:
//             {
//                 return "Thursday";
//             }
//         case 5:
//             {
//                 return "Friday";
//             }
//         case 6:
//             {
//                 return "Saturday";
//             }

//         case 7:
//             {
//                 return "Sunday";
//             }

//         default:
//             return null;
//     }

// }

// returnDay(1) // "Monday"
// returnDay(7) // "Sunday"
// returnDay(4) // "Thursday"
// returnDay(0) // null

// console.log(returnDay(0));

//-------------------------------------------
//고차함수 (재귀함수는 자기자신을 호출)
//함수를 인자로 받을 수 있고, 함수의 형태로 리턴


////callTwice(rollDie) func->rollDie
// function callTwice(func) {
//     func(); 
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// //callTenTimes(rollDie)
// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// callTwice(rollDie)

// callTenTimes(rollDie)
//--------------------------------------------

// 함수 리턴


// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("CONGRATS, I AM A GOOD FUNCTION!");
//             console.log("YOU WIN A MILLION DOLLARS!!");
//         }
//     }
//     else {
//         return function () {
//             alert("You HAVE BEEN INFECTED BY A COMPUTER VIU")
//             alert("alert 경고창 ")
//             alert("STOP TRYING TO CLOSE THIS WIDNW");


//         }       
//     }
// }

// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }

// const testRange = function (num) {
//     return num >= 100 && num <= 200;
// }


// // function isBetween(num) {
// //     return num >= 100 && num <= 200;
// // }

// // function isBetween2(num) {
// //     return num >= 1 && num <= 10;
// // }

//----------------------------------------------

//메서드 정의하기

// const MyMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }
// console.log(MyMath.cube(4));
// console.log(MyMath["cube"](4));

// //더 간단한 방법 
// const MyMath2 = {
//     PI: 3.14159,
//     square(num){
//         return num*num;
//     },
//     cube(num){
//         return num **3;
//     }
// }

//------------------------------------------------

// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottich fold',
//     meow() {
//         console.log(`${this.name} MEOW MEOW MEOW`);
//     }
// }

// const meow2 = cat.meow;

// console.log(cat.meow()); //Blue Steele MEOW MEOW MEOW
// console.log(meow2()); //MEOW MEOW MEOW

// const dog = {
//     name: 'Wandek',
//     color: 'white',
//     breed: 'pongsan',
//     bow() {
//         console.log("THIS IS: ", this);
//     }
// }

// console.log(dog.bow()); // -> 객체 정보 출력

// function scream(){
//     console.log("AHHHHHHAHAHAAA");
// }

// console.log(scream());
// //윈도우는 자바스크립트의 최상위 객체
// console.log(window.scream);


// console.log(meow2());

// console.log(this); //->윈도우 객체 정보 출력
// //객체.함수 최상위 객체 = 윈도우 
//------------------------------------------------
// 오류 발생 대처법ㅁㅁㅁㅁㅁㅁ

// try { //오류 발생 -> hello 변수는 없음
//     hello.toUpperCase();
// } catch { // catch 오류 발생시 ERROR 출력
//     console.log("ERROR !!!")
// }

// function yell(msg) {
//     try { //문자열 아니면 
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e) {
//         //console.log(e);
//         console.log("Please pass a strinng next time");
//     }
// }

//---------------------------------------------------------

//forEach 출력 메서드

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


// function print(element) {
//     console.log(element);
// }

// print(numbers[0]);
// numbers.forEach(print);
// //1 ~ 16까지 출력

// //다른 방법 함수 이름을 따로 설정할 필요가 없음
// numbers.forEach(function (element) {
//     if (element % 2 == 0)
//         console.log(element);
// })

// // for (let el of numbers) {
// //     console.log(el);
// // }

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85           
//     },                                                                                                                                                                                     
//     {
//         title: 'Parasite',
//         score: 89
//     },
//     {
//         title: 'Alien',
//         score: 70
//     },
//     {
//         title: 'Titanic',
//         score: 98
//     },
// ]


// movies.forEach(function(movie){
//     console.log(`${movie.title} - ${movie.score}/100`)
// })

// const f = function(movie){

// }

//---------------------------------------------

//모든 요소 변경하기 MAP// 콜백함수를 수령해서 배열의 요소당 1번씩 실행
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

// const doubles = numbers.map(function (num) {
//     {
//         return num * 2;
//     }
// })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 89
//     },
//     {
//         score: 70                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
//     },
//     {
//         title: 'Titanic',
//         score: 98
//     },
// ]

// const titles = movies.map(function (movie) {
//     return movie.title.toUpperCase();
// })

// const title = movies.forEach(function (movie) {
//     return movie.title.toUpperCase();
// })

//----------------------------------------------
//함수 표현식을 만드는 것을 도와줌
//화살표 연산자

//c++ operator와 비슷한 개념 
// const add = function(x,y) {
//     return x+y;
// }

// const add2 = (x,y) => {
//     return x+y;
// }

// const add3 = (x) => {
//     return x+10;
// }

// const square = (x) => {
//     return x*x;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() *6)+1;
// }
//----------------------------------------------

// 중괄호를 소괄호로 바꾸면 화살표 함수를 포함한 
//새로운 구문이 암시적반환을 만듬
//암시적반환은 반환해야할 값이 하나만 있을때 사용가능

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// // const add = (x,y) => {
// //     return x+y;
// // }

// const add = (x,y) => x+y; //짧게 쓰는거 가능
//--------------------------

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 89
//     },
//     {
//         score: 70                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
//     },
//     {
//         title: 'Titanic',
//         score: 98
//     },
// ]

// // function movie(element) {
// //     return `${element.title} - ${element.score/10}`
// // }
// // print(numbers[0]);
// // numbers.map(print);


// // const newMovies = movies.map(function(movie){ //movie는 매게변수
// //     return `${movie.title} - ${movie.score/10}`
// // })


// const newMovies = movies.map(movie => (
//      `${movie.title} - ${movie.score/10}`
// ))

//     setTimeout(()=>{ //n초후 재생
//         console.log("...are you still there?")
//     },3000);

//     setInterval(() => { //반복 재생
//         console.log(2000)
//     },2000);
//=----------------------------
// Filter는 요소로 구성된 배열에서 필터링 하거나 부분 집합을
// 모아 새 배열을 만드는데 사용
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// numbers.filter(n => {
//     return n < 10;
// })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 89
//     },
//     {
//         title: 'ohio',
//         score: 50
//     },
//     {
//         title: 'Titanic',
//         score: 98
//     },
// ]

// const goodMovies = movies.filter(m => m.score > 80)
// const goodtitles = goodMovies.map(m => m.title)
// const good_sum = movies.filter(m => m.score > 80).map(m => m.title)

// const badMovies = movies.filter(m => m.score < 70)
// const recentMovies = movies.filter(m => m.year > 2000)


// console.log(goodMovies)
// console.log(goodtitles)
// console.log(good_sum)
//-------------------------------------------------------------------
//연습문제 

// // 방법 1
//const array = ['aaa', 'bbb', 'ccccwdw241', 'ioighewiogheiohe', 'ghieowhg'];

// function validUserNames(usernames) {
//     // your code here
//     const Names = [''];
//     let j = 0;
//     for (i = 0; i < usernames.length; i++) {
//         if (usernames[i].length < 10) {
//             Names[j] = usernames[i];
//             j++
//         }


//     }
//     return Names;
// }
// console.log(validUserNames(array));

// //방법 2
// const validUserNames2 = usernames => {
//     const Names = [''];
//     let j = 0;
//     for (i = 0; i < usernames.length; i++) {
//         if (usernames[i].length < 10) {
//             Names[j] = usernames[i];
//             j++
//         }
//     }
//     return Names;
// }
// console.log(validUserNames2(array));

// //방법 3

// function validUserNames3(usernames) {
//     // your code here
//     const answer = usernames.filter(m => m.length < 10)

//     return answer;
// }
// console.log(validUserNames3(array));

// //방법 4
// const validUserNames4 = usernames => (usernames.filter(m => m.length < 10));
// // 배열 => (배열.함수(배열요소=> 리턴 조건)
// console.log(validUserNames4(array));

//------------------------------------------
//SOME EVERY 불리언 메서드라서 참이나 거짓을 반환 
//every는 하나라도 거짓이 있으면 false -> and 
//some은 하나라도 참이 있으면 true -> or
// const exams = [80,96,72,26,85,74,13,74,57,85,17,97]

// console.log(exams.some(score=>score >= 50))


// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 89
//     },
//     {
//         title: 'ohio',
//         score: 50
//     },
//     {
//         title: 'Titanic',
//         score: 98
//     },
// ]

// console.log(movies.every(total=>total.score>=40))

// function allEvens(array){
//     let isBool = array.every(num=>num%2==0);
//      return isBool;
// }
// console.log(allEvens([2,4,6,8]))

//-------------------------------

// Reduce 배열을 점차 줄여가면서 마지막에는 결국 하나의 값만 남김
//자동적으로 배열 안에 있는 모든 요소를 처리하지 X
//(x,y) -> x에 값을 리턴해서 누적 x = x+y

// const prices = [1, 2, 3, 4, 5]; //-> 15
// let total = 0;

// for (let price of prices) { //-> 15
//     total += price;
// }


// total = prices.reduce((total, price) => {
//     console.log(`${total},${price}`)
//     //total1 + price1 -> (total1+price1) + price2
//     return total + price
// });

// const total2 = prices.reduce((total, price) => total * price)

// const minPrice = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min
// })

// console.log(total2)


// const movies = [
//     {
//         title: 'Amadeus',
//         score: 19,
//         year: 2022
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 2011
//     },
//     {
//         title: 'Parasite',
//         score: 89,
//         year: 2000
//     },
//     {
//         title: 'ohio',
//         score: 50,
//         year: 2001
//     },
//     {
//         title: 'Titanic',
//         score: 88,
//         year: 2004
//     }
// ]

// const highestRated = movies.reduce((bestMovie, currMovie) => {
//     console.log(`${bestMovie.score},${currMovie.score}`);
//     //return에 받는 값은 첫 번째 매개변수 
//     if (currMovie.score > bestMovie.score) {

//         return currMovie;
//     }
//     return bestMovie;
// })

// console.log(highestRated)

//------------------------------------------------
// const add2 = (x,y) => {
//     return x+y;
// }

// numbers.filter(n => {
//     return n < 10;
// })

// const validUserNames4 = usernames => (usernames.filter(m => m.length < 10));

// 객체네 function과 화살표연산자가 다름

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () { //메서드 정의
        return `${this.firstName} ${this.lastName}`
    },
    fullName2: (() => {
        return `${this.firstName} ${this.lastName}`
    }),
    test: function (a) {
        return a;
    },

    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 3000)
    }
}


console.log(person.test(person.lastName))
console.log(person.fullName());
console.log(person.fullName2());

// fullName: function() {}
// 일반 함수로 선언된 fullName은 호출시점에 this가 결정됩니다.
// 즉, this는 그 함수가 어디서 호출되었는지에 따라 달라집니다.
// 따라서, 이 함수는 해당 객체의 firstName과 lastName 속성을 참조할 수 있습니다.

// fullName2: (() => {})
// 화살표 함수로 선언된 fullName2는 화살표 함수의 this가 선언시점에 결정됩니다.
//  화살표 함수는 자신만의 this를 가지지 않고,
//  화살표 함수가 선언된 범위에서 this를 상속받습니다.
//  이 경우, this는 일반적으로 전역 객체를 가리키게 됩니다.
//  따라서 이 화살표 함수는 객체의 firstName과 lastName 속성을 참조하지 못하고,
//  undefined를 반환할 확률이 높습니다.