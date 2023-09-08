// 자바스크립트는 단일 스레드이다
// 자바스크립트에는 어느 시점에서 작동할 수 있는 부분이 하나 있음을 의미
// 자바스크립트는 최대 한 번에 한 줄의 코드만 실행
// 다른 줄의 코드 사이를 앞뒤로 전환 할 수 있다

// 브라우저에는 WebAPIs가 있다. WebAPIs는 일반적으로 JS에서 호출하여
// 브라우저로 전달하는 방법
// JS는 브라우저에게 넘겼기 때문에 실제로 처리할 필요가 없다
// setTimeout 브라우저도 요청하기 등에 포함
// 실제로 작동하는 방식은 JavaScript의 콜 스택이 Web API 함수를 인식하고
// 브라우저에 전달하는 것

// 이 일을 처리하기 위해 3초 후에 알려주세요 한다면 브라우저가 작업을
// 마치자말자 3초 후에 다시 콜 스택에 추가 자바스크립트는 다시 이어 받아서 적절한 코드를 실행

//프로그래밍에서 콜백(callback) 또는 콜백 함수(callback function)는 
//다른 코드의 인수로서 넘겨주는 실행 가능한 코드를 말한다.



console.log("Sending request to server! ");

//setTimeout 함수는 자바스크립트의 내장함수이다 
setTimeout(() => {
    console.log("Here is Your data from the server ...")
}, 3000);

// setTimeout(function(){
//     console.log("Here is Your data from the server...")
// },3000)
console.log("I AM AT THE END OF THE FILE! ");// 3초 후 출력





// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'blue'
// }, 2000); //둘 다 시간을 1000으로 하면 똑같은 시간 대에 실행


// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'blue'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'green'

//         }, 1000);

//     }, 1000);

// }, 1000);


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay)
}

// delayedColorChange('red',1000,()=>{
//     console.log("INSIDE CALLBACK!!!")
// });

//변수를 원래 delayedColorChange 함수에 전달하고 가져온다 
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                    delayedColorChange('purple', 1000, () => {

                    });
                });
            });
        });
    });
});

//존재하지 않는 함수
searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        //if it works, run this
    }, () => {
        //if it doesn`t work, run this
    })

}, () => {
    //if API is down, or request failed
    //API가 멈추거나, 요청이 실패했을 경우
})