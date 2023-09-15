//콜백함수의 예시
// 콜백 함수는 다른 함수에 인자로 전달되어 나중에 실행되기 위해 사용되는 함수를 말합니다. 
// 자바스크립트는 비동기 작업 처리를 위해 콜백 함수를 널리 사용
// function greeting(name) {
//     alert('Hello ' + name);
// }

// function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
// }

// processUserInput(greeting);




//-----------------------------------------------------------
// //2개의 콜백을 나둔다. 1.성공 콜백 2.실패 콜백
// makeRequest(() => {
//     makeRequest(() => {
//         makeRequest(() => {

//         },
//             () => {

//             })
//     },
//         () => {

//         })
// },
//     () => {

//     })


// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure("Connection Timeout :(")
//         } else {
//             console.log("local");
//             success(`Here is Your fake data from ${url}`)
//         }
//     }, delay)
// }

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!");
//         console.log(response); //-> Here is Your fake data from books.com

//         fakeRequestCallback('books.com/page2',//----- 1
//         //성공을 했다면 똑같이 한 번더 실행 
//         function (response) {
//                 console.log("IT WORKED AGAIIN !!!");
//                 console.log(response);

//                 fakeRequestCallback('books.com/page3', //------2
//                 //또 성공 했으면 실행
//                 function(response){
//                     console.log("IT WORKED AGAIIN(3rd request) !!!");
//                     console.log(response);
//                 },
//                 function(err){
//                     console.log("ERROR!!!",err);
//                 })//------2


//         },function(err){
//             console.log("ERROR (2nd req)!!!",err);
//         })//------1

//     }, function (err) {
//         console.log("ERROR!!!", err);
//     })

//--------------------------------------------------

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is Your fake data from ${url}`)
            }
        }, delay)
    })
}

// const request = fakeRequestPromise('yelp.com/api/coffee');

// request
//     .then((a) => {
//         console.log("PROMISE RESOLVED!");
//         console.log("IT WORKED!! ");
//         console.log(a)

//         request
//             .then((a) => {
//                 console.log("PROMISE RESOLVED (2)!");
//                 console.log("IT WORKED!! (2)");
//                 console.log(a)
//             }).catch((err) => {
//                 console.log("PROMISE REJECTED!");
//                 console.log("OH NO ERROR!!");
//                 console.log(err);
//             })

//     }).catch((err) => {
//         console.log("PROMISE REJECTED!");
//         console.log("OH NO ERROR!!");
//         console.log(err);
//     })


//Promise의 마법

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED !!(page(1)");
        console.log(data);
        //return 값을 적지 않고 무지성으로 .then을 이어 붙이면
        //함수가 한 번더 실행하지 않고 연달아서 출력됨 
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED !! (page2)")
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED !! (page2)")
        console.log(data);
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED !!")
        console.log(err);
    })


