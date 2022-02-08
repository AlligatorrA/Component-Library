const faTimes = document.querySelectorAll(".fa-times")
const Alerts = document.querySelector(".Alerts")

faTimes.addEventListener("click", dismissFunc = () =>{
    Alerts.style.display = "none"
})