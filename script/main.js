let myImage = document.querySelector('img').onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'image/logo.eb1324e44442.svg') {
        myImage.setAttribute('src', 'image/Google_Chrome_icon_(February_2022).svg.png');
    } else {
        myImage.setAttribute('src', 'image/logo.eb1324e44442.svg');
    }
}

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt('请输入你的名字');
    if(!myName) {
        setUserName()
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了, ' + myName;
    }
}
myButton.onclick = function() {
    setUserName();
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了, ' + storedName;
}


