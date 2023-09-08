// const lis = document.querySelectorAll('li');

// for(let li of lis)
// {
//     li.addEventListener('click ',function() {
//         li.remove();
//     })
// }



const tweetForm = document.querySelector('#tweetForm');

const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {

    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`)
    tweetsContainer.append(newTweet);
}

//log는 body의 요소가 출력
//dir은 전체 요소가 출력, 함수(객체)도 출력
tweetsContainer.addEventListener('click', function (e) {
    console.log("Click ON Ul")
    console.dir(e);
    console.log(e); // target -> li
    e.target.nodeName === 'LI' && e.target.remove();
    //target.nodeName 이 LI이면 target.remove 

})
