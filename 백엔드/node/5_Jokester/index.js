//5_Jokester 이외의 폴더에서 require("colors")명령어를 쓰면
// 오류-> 지역 설치이기 때문이다 
//전역 설치를 할 수 있지만 지역 설치를 하는 것이 좋다
//프로젝트마다 다른 version이 사용 할 수 있기 때문    

const jokes = require("give-me-a-joke");

console.dir(jokes)
//->
// {
//     getRandomCNJoke: [Function (anonymous)],
//     getCustomJoke: [Function (anonymous)],
//     getRandomDadJoke: [Function (anonymous)],
//     getRandomJokeOfTheDay: [Function (anonymous)]
//   }

const colors = require("colors") //npm install colors ,install을 i로 단축어로 쓸 수 있다.

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
})

//sudo chown -R $USER usr/local/lib/node_modules
//npm link cowsay