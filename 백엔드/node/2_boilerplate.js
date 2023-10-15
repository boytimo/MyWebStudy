const fs = require('fs');

//설명  fs module (= File System module)

//console.log(fs)

// fs.mkdir('Dogs', { recursive: true }, (err) => { //파일 생성
//     console.log("IN THE CALLBACK");
//     if (err) throw err;
// })

// console.log("I COME AFTER MKDIR IN THE FILE ")

const folderName = process.argv[2] || 'Project'
//argv 속성은 명령 줄 인수를 배열로 반환
//배열의 첫 번째 요소는 node의 실행 경로 
//두 번째 요소는 실행되는 스크립트의 경로

//process.argv[2]: 세 번째 인수, 즉 사용자가 명령 줄에
//제공한 첫 번째 인수를 참조한다.

//process.argv[2]가 인수가 없다면 folderName은 Project라는
//기본 값으로 초기화 된다.

try {
    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`, "")
    fs.writeFileSync(`${folderName}/app.js`, "")
    fs.writeFileSync(`${folderName}/style.css`, "")
    //뒤에 문자열 인수를 넣지 않아서 오류 발생했었음
} catch (e) {
    console.log("SomeThing Went Wrong ", e);
}

//이 파일을 node로 실행하면 Project 폴더가 생성된다.
//+ html, js, css

