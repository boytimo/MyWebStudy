const args = process.argv.slice(2);

for (let arg of args) {
    console.log(`Hi There, ${arg}`);
}

//내가 스크립트에 입력한 colt, rusty를 출력
//slice(2) -> 3번째 부터 짤라서 가져옴
//node greeter.js colt rusty

// -> Hi There, colt
//    Hi There, rusty
