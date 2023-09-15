
const form = document.querySelector('#searchForm')

const form2 = document.querySelector('#TvSearchForm')
//form.elements는 HTML form요소의 모든 자식요소들
//을 참조하는 콜렉션을 반환

//예를 들어, 폼 내에 name=query라는 속성을 가진
//<input> 요소가 있다면, 해당 요소를 

// let form = document.querySelector('form'); // 폼을 선택합니다.
// let queryInput = form.elements.query;      // name="query"인 입력 요소를 참조합니다.

const UL = document.querySelector('#imgUl')

const makeImages = (shows) => {

    for (let result of shows) {
        console.log(result)

        if (result.show.image !== null) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            UL.append(img);
        }
    }
}


form.addEventListener('submit', function (e) {
    e.preventDefault(); //form이 다른 사이트로 연결X
    console.log("SUBMITTED")
    console.dir(form)
    console.log(form.elements.query.search);
})

form2.addEventListener('submit', async function (e) {

    e.preventDefault();

    if (UL) {
        const ULimage = document.querySelectorAll('ul img');
        ULimage.forEach(img => {
            img.remove();
        })
    }

    //form2에 input에 query라는 name이 있음
    //input에 값을 넣으면 value에 값 대입 
    const searchTerm = form2.elements.query.value;
    const config = { params: { q: searchTerm, isFunny: 'colt' } }

    //const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=`, config)

    //console.log(res.data);
    makeImages(res.data);

    form2.elements.query.value = '';

})

