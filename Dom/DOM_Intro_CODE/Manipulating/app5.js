

const h2 = document.querySelector('h2');
console.log(h2)


//h2.setAttribute('class','border'); //요소 생성

// let currentClasses = h2.getAttribute('class')  //<h2 class = "border purple">

// console.log(currentClasses)
// console.log(h2)
// h2.setAttribute('class', `${currentClasses} purple`)


console.log(h2.classList)
h2.classList.add('purple');
h2.classList.add('border');
h2.classList.remove('border'); // 제거 

h2.classList.contains('border'); //-> false
h2.classList.contains('purple'); //->true

const firstBold = document.querySelector('b')

console.log(firstBold);
console.log(firstBold.parentElement); // -> 부모요소
console.log(firstBold.parentElement.parentElement);

const paragraph = firstBold.parentElement;
console.log(paragraph.children) // -> 자식요소
for (ask of paragraph.children) {
    console.log(ask);
}

const squareImg = document.querySelector('.square')
console.log(squareImg)

//nextSibling, nextElementSibling 모두 같은 노드 레벨의 다음 값을 가져온다
// nextSibling은 공백이든, 텍스트든 가리지 않고 다음에 있는 것을 가져오게 되고,
// nextElementSibling 은 Element(요소)만 가져오게 된다. 

console.log(squareImg.nextSibling);
console.log(squareImg.nextElementSibling);

