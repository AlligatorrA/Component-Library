const arrowBtn = document.getElementById('aside-btn')
const asideBar = document.getElementById("aside-bar");

arrowBtn.addEventListener("click", ()=>{
  if (asideBar.style.display === "none") {
    asideBar.style.display = "block";
  } else {
    asideBar.style.display = "none";
  }
})