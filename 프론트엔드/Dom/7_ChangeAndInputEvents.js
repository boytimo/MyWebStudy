const input = document.querySelector('input')
const h1 = document.querySelector('h1')

input.addEventListener('input', function (e) {
    if (input.value.length === 0) {
        h1.innerText = "Enter Your Username"
    }
    else if (input.value.length >= 1) {
        h1.innerText = "Welcome,"
        h1.innerText += input.value
    }


    console.log(e);
})