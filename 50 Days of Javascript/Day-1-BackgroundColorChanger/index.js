const button = document.querySelector("button");
const body = document.querySelector("body");

const colors = ["blue", "red", "green", "yellow", "orange", "navy blue", "aqua", "grey", "black", "pink"];

function changeBackgroundColor() {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex]; 
};

body.style.backgroundColor ="white";
button.addEventListener("click", changeBackgroundColor);