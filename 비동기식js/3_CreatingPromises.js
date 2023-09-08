
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.5) {
                reject('Your Fake Data here');
            } else {
                resolve('Error');
            }
        }, 1000)
    })
}

fakeRequest('/dogs/')
    .then((data) => {
        console.log("DONE WITH REQUEST!", data)
    })
    .catch((err) => {
        console.log("DONE DO THAT", err)
    })


const delayedColorChange = (newColor) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(newColor);
        }, 1000)
    })
}

delayedColorChange('red')
    .then((data) => {
        document.body.style.backgroundColor = data;
        return delayedColorChange('orange');
    })
    .then((data) => {
        document.body.style.backgroundColor = data;
        return delayedColorChange('yellow');
    })
    .then((data) => {
        document.body.style.backgroundColor = data;
        return delayedColorChange('green');
    })
    .then((data) => {
        document.body.style.backgroundColor = data;
        return delayedColorChange('blue');
    })
    .then((data) => {
        document.body.style.backgroundColor = data;
        return delayedColorChange('purple');
    })
    .then((data) => {
        document.body.style.backgroundColor = data;
    })
