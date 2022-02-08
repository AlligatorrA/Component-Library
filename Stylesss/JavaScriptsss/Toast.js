const cartBtn = document.querySelectorAll(".toast-add")
const cartAdded = document.querySelectorAll(".toast-added");

cartBtn.addEventListener("click", addcartFunction)

cartAdded.style.display = "none"
function addcartFunction(e) {
    e.preventDefault()
    if (cartAdded.style.display === "none") {
        cartAdded.style.display = "block"
    }
    setTimeout(() => {
        cartAdded.style.display = "none"
    }, 3000);

}