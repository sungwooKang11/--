const body =document.querySelector("body");
const toggle = document.querySelector(".toggle");
const bg = document.querySelector(".bg");
let cnt = 1;

function cntUp() {
    cnt++;
    handleToggle();
    console.log(cnt);
}

const handleToggle = () => {
    if(cnt %2 === 0) {
        toggle.classList.remove("back");
        toggle.classList.add("go");
        body.classList.remove("bgWhite");
        body.classList.add("bgDark");
    }
    else {
        toggle.classList.remove("go");
        toggle.classList.add("back");
        body.classList.remove("bgDark");
        body.classList.add("bgWhite");
    }
}

bg.addEventListener("click", cntUp);