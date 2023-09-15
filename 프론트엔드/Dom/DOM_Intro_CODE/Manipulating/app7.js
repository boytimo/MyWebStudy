//요소 제거

const firstLi = document.querySelector('li')

const ul = firstLi.parentElement

console.log(ul)
ul.removeChild(firstLi) // 1번 li 삭제

const b = document.querySelector('b');
console.log(b.parentElement)
b.parentElement.removeChild(b);

const img = document.querySelector('img')
img.remove(); //-> 부모/자식 요소 안 적어도 됨 