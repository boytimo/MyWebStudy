
// async function hello() {


// }



// const sing = async () => {
//     throw "OH NO, SHIT"
//     return 'LALALALA'
// }

// sing()
//     .then((data) => {
//         console.log("PROMISE RESOLVED WITH:", data);
//     })
//     .catch((err) => { //throw에서 에러발생시 실행
//         console.log("OH NO PROMISE REJECTED");
//         console.log(err);
//     })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials';
    //값이 없다면 -> .catch
    if (password === 'corgifeetarecute') return 'WELCOME' //.then
    throw 'Invalid Password' //값이 틀리다면 -> .cath
}

login('boytimo', '')
    .then(msg => {
        console.log("LOGGED IN");
        console.log(msg);
    })
    .catch((err) => {
        console.log("ERROR");
        console.log(err);
    })
//---------------------------------------------

// delayedColorChange('red',1000)s
//     .then(()=>delayedColorChange('orange',1000))
//     .then(()=>delayedColorChange('yellow',1000))
//     .then(()=>delayedColorChange('green',1000))
//     .then(()=>delayedColorChange('blue',1000))
//     .then(()=>delayedColorChange('purple',1000))


const delayedColorChange = (newColor) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, 1000)
    })
}

async function rainbow() {
    await delayedColorChange('red');
    await delayedColorChange('orange')
    await delayedColorChange('yellow')
    await delayedColorChange('green')
    await delayedColorChange('blue')
    await delayedColorChange('purple')
    return " ALL DONE"
}

//rainbow().then((a)=>console.log("END OF RAINBOW"+a));

async function printRainbow() { //위에랑(.then) 기능이 똑같다 
    await rainbow();
    console.log("END OF RAINBOW")
}

printRainbow();

//-------------------------------------

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        console.log("promise")
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is Your fake data from ${url}`)
            }
        }, delay)
    })
}

// async function makeTwoRequests(){
//     let data1 = await fakeRequestPromise('/page1');
//     console.log(data1)
// }
//Promise에 있던 catch는 어떻게 표한할까?
//-> try, catch 문으로 


async function makeTwoRequests() {
    try {
        let data1 = await fakeRequestPromise('/page1');
        console.log(data1)
        let data2 = await fakeRequestPromise('/page2')
        console.log(data2)

    } catch (e) {
        console.log("CAUGHT AN ERROR");
        console.log("error is", e)
    }
}

makeTwoRequests();  