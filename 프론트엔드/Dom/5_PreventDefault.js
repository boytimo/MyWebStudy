
const input = document.querySelector("#catName");
const form = document.querySelector("#shelterForm");
const list = document.querySelector("#cats");

form.addEventListener("submit", function (e) {

    e.preventDefault(); //얘 없으면 li 추가 못하고 넘어감
    //preventDefault() -> 페이지 안 넘어가게 함
    console.log(input.value);
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    list.append(newLI) //li 추가 
    console.log(newLI)
    input.value = "" //적으면 빈칸으로 만듬
})
