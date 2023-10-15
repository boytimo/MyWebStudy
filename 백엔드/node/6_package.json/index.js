//package의 중요성 

//package.json을 보면 
//figlet: 1.6.0을 볼 수 있다.

//이 앱에서 사용하고 있는 모든 것에 대한 기록의 역할을
//한다 

//node_module로 하는 작업이랑 
//싱크를 맞춰놓고 나중에
//node_module가 삭제되거나 
//이 파일을 다른 사람에게 보내는 경우 
//필요한 디펜더시 같이 있도록 하기 위함

const figlet = require('figlet');
const color = require('colors')

figlet('Hello world!', function (err, data) {
    if (err) {
        console.log('Something went wrong ...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
})

//npm init으로 손쉽게
//package.json을 만들 수 있다

//만약 다른 작업자의 git 파일을 다운 받으면
//node_modules가 없는 것이 대부분이다
//없는 패키지 명령어를 쓰면 오류가 날 것이고
//다시 패키지를 다운 받아야한다
//일일히 npm i colors를 하면 번거롭다
//하지만 package.json 기록이 있으면 번거롭지 않다.
//npm install 명령어를 사용하면 package.json기록을 기기가 찾아보고
//모든 패키지를 다운로드 한다. 
