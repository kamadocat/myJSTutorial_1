const myHeading = document.querySelector('h1');
let hasChanged = false;
let originalMessage = "";
document.querySelector('.message').onclick = () => {
    if (hasChanged) {
        alert('メッセージをもとに戻します｡');
        myHeading.textContent = originalMessage;
        hasChanged = false;
    } else {
        alert('メッセージを変更します｡');
        originalMessage = myHeading.textContent;
        myHeading.textContent = 'Hello World!';
        hasChanged = true;
    }
}

const logoImage = document.querySelector('.logo_img');

const buttons = {
    firefox: document.querySelector('#FirefoxButton'),
    nightly: document.querySelector('#NightlyButton'),
    thunderbird: document.querySelector('#ThunderbirdButton')
};

buttons.firefox.onclick = () => {logoImage.setAttribute('src', 'images/firefox_logo.png')};
buttons.nightly.onclick = () => {logoImage.setAttribute('src', 'images/firefox_nightly_logo.png')};
buttons.thunderbird.onclick = () => {logoImage.setAttribute('src', 'images/thunderbird.png')};

let changeUserButton = document.querySelector('#changeUser');

function setUserName() {
    let myName = prompt("あなたの名前を入力してください｡");
    if (myName === "") { setUserName(); }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = "ようこそ､" + myName;
    }
}

// myNameの初期化
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "ようこそ､" + storedName;
}

changeUserButton.onclick = () => {
    setUserName();
}