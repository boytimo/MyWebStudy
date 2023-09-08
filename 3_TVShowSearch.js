
const form = document.querySelector('#searchForm')

//form.elements는 HTML form요소의 모든 자식요소들
//을 참조하는 콜렉션을 반환
form.addEventListener('submit', function (e) {
    e.preventDefault(); //form이 다른 사이트로 연결X
    console.log("SUBMITTED")
    console.dir(form)
})