const drawerBtn = document.querySelector(".drawer-btn");
const hideAside = document.querySelector(".AsideClass");
const asideAndMain = document.querySelector(".asideAndMain");
const DocumentationMain = document.querySelector(".Documentation-main");

drawerBtn.addEventListener("click", drawerHandlerFunction)
function drawerHandlerFunction() {
    if (hideAside.style.display === "none") {
        hideAside.style.display = "block"

    }else{
        hideAside.style.display = "none"
        asideAndMain.style.width = "100%"
        DocumentationMain.style.width = "100%"

    }

}
