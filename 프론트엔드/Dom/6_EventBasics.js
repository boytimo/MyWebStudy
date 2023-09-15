
// const tweetForm = document.querySelector('#tweetForm');

// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault()

//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;

//     console.log(tweetForm.elements.username)
//     console.log(tweetForm.elements.tweet)
//     addTweet(usernameInput.value, tweetInput.value);
//     usernameInput.value = '';
//     tweetInput.value = '';

// })

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');

//     bTag.append(username)

//     newTweet.append(bTag);

//     newTweet.append(`- ${tweet}`);
//     tweetForm.append(newTweet);

// }


//연습문제
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {


    e.preventDefault();
    const first = form.elements.product;
    const second = form.elements.qty;

    add(first.value, second.value)

    first.value = "";
    second.value = "";

})

const add = (a, b) => {
    const newLi = document.createElement('li');
    newLi.innerText = `${b} ${a}`;
    document.body.appendChild(newLi)


}


