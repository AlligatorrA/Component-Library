const navbtn = document.querySelector("#nav-btn");
const navul = document.querySelector(".nav-ul");


navbtn.addEventListener("click", hidenDisplayFunc)


function hidenDisplayFunc() {
    if (navul.style.display === "block") {
        navul.style.display = "none"
    } else {
        navul.style.display = "block"
    }


}