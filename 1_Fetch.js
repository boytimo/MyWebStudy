
//console.log로 출력하면 Promise를 반환한다
//.then이나 .catch 추가

// fetch("https://swapi.dev/api/people/1/")

// .then(res=>{
//     console.log("RESOLVED",res)
//     //여기서 body를 읽고 구문을 해석해야함

//     //res 객체를 가져옴 / JSON.parse()와 다름 *주의
//     //Promise를 반환해야함
//     //res.json().then(data=>console.log("JSON DONE",data))
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log("ERROR",err)
// })

//------------------------------------


// fetch("https://swapi.dev/api/people/1/")

// .then(res=>{
//     console.log("RESOLVED",res)
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/")
// })
// .then(res=>{
//     console.log("SECOND REQUEST RESOLVED",res)
//     return res.json()
// })
// .then((data=>{
//     console.log(data);
// }))
// .catch(err=>{
//     console.log("ERROR",err)
// })

//------------------------------

//비동기 함수 사용
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("httpsh://swapi.dev/api/people/1/")
        const data = await res.json();
        console.log(data);

        const res2 = await fetch("https://swapi.dev/api/people/2/")
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("ERROR", e);
    }

}

loadStarWarsPeople();

//가장 기본적인 형태의 URL을 제공하면 GET요청이 자동으로
//실행 그리고 프로미스를 반환 