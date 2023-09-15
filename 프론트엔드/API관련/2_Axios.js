
// axios.get("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log("RESPONSE",res);
// })
// .catch((e)=>{
//   console.log("ERROR",e);  
// })
//------------------------------------
// const getStarWarsPerson = async (id) => {
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     }
//     catch(e){
//         console.log("Error",e)
//     }

// }

// getStarWarsPerson(5);
//------------------------------
const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')


const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('li')
    newLI.append(jokeText)
    jokes.append(newLI); //li를 ul로 삽입
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'apssplication/json' } }
        const res = await axios.get(`https://icanhazdadjoke.com/`,)

        console.log(res)
        console.log(res.data.joke)

        return res.data.joke;
    }
    catch (e) {
        console.log("Error", e)
    }

}

//api는 속도제한이 있을 수 있으므로 너무 자주 호출하지는 말자

button.addEventListener('click', addNewJoke)
