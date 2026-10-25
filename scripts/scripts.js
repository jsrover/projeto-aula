let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc   === "images/j dilla.jpg") {
    myImage.setAttribute("src", "images/OIP.png");
    } else {
        myImage.setAttribute("src", "images/j dilla.jpg");
    }
};

// mesagem de boas vindas
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Por favor, digite seu nome.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Drum Beat é legal, " + myName;
};

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Drum Beat é legal, " + storedName;
}

myButton.onclick = () => {
    setUserName();
}
