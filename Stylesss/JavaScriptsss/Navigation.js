const tooglenavBtn = document.querySelector(".toogle-nav-Btn");
const dropDownNav = document.querySelector(".Dropdown-Nav");
const dropDownNavLi = document.querySelectorAll(".Dropdown-NavLi");


tooglenavBtn.addEventListener("click", hidenDisplayFunc)
searchLabelToggle.addEventListener("click", searchLabelToggleFunc)


function hidenDisplayFunc() {
    if (dropDownNav.style.display === "block") {
        dropDownNav.style.display = "none"
    } else {
        dropDownNav.style.display = "block"
    }


}