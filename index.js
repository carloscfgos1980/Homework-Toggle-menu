let toggleNavStatus = false;

let toggleNav = function () {
    let getSideBar = document.querySelector(".nav-sidebar");
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    let getSideBarUlSpan = document.querySelectorAll(".nav-sidebar ul span");

    if (toggleNavStatus === false) {
        getSideBarUl.style.visibility = "visible";

        let arrayLength = getSideBarUlSpan.length;

        for (let i = 0; i < arrayLength; i++) {
            getSideBarUlSpan[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {

        getSideBarUl.style.visibility = "hidden";

        let arrayLength = getSideBarUlSpan.length;

        for (let i = 0; i < arrayLength; i++) {
            getSideBarUlSpan[i].style.opacity = "0";
        }

        toggleNavStatus = false;
    }
};

let bodyWhole = document.querySelector('body');

let backgroundGray = document.querySelector('.nav-sidebar li:nth-child(2)');

let backgroundRed = document.querySelector('.nav-sidebar li:nth-child(2)');


let backgroundOrange = document.querySelector('.nav-sidebar li:nth-child(3)');

let backgroundPurple = document.querySelector('.nav-sidebar li:nth-child(4)');

let backgroundGreen = document.querySelector('.nav-sidebar li:nth-child(5)');


const changeColorGray = function () {
    bodyWhole.style.background = "#f1f1f1"
};

const changeColorRed = function () {
    bodyWhole.style.background = "red"
};

const changeColorOrange = function () {
    bodyWhole.style.background = "orange"
};

const changeColorPurple = function () {
    bodyWhole.style.background = "purple"
};

const changeColorGreen = function () {
    bodyWhole.style.background = "green"
};

backgroundRed.addEventListener("click", changeColorRed);

backgroundOrange.addEventListener("click", changeColorOrange);

backgroundPurple.addEventListener("click", changeColorPurple);

backgroundGreen.addEventListener("click", changeColorGreen);