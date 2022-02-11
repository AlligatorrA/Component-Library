const addToast = document.getElementById("add-toast")
const addedToast = document.getElementById("added-toast");

addToast.addEventListener("click", addcartFunction)

addedToast.style.display = "none"
function addcartFunction(e) {
    e.preventDefault()
    if (addedToast.style.display === "none") {
        addedToast.style.display = "block"
    }
    setTimeout(() => {
        addedToast.style.display = "none"
    }, 3000);

}