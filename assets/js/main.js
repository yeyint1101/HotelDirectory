const COPYRIGHT_YEAR = new Date().getFullYear();
document.getElementById("rightYr").innerHTML = COPYRIGHT_YEAR;

const SIDEBAR = document.querySelector("aside");
const BLOCK = document.getElementById("blockScreen");

window.addEventListener("scroll", () => {
  const LOCATION = document.querySelector("#distinct");
  const ARROW = document.getElementById("upArrow");

  const POSITION = LOCATION.offsetTop;
  console.log(POSITION);

  if (window.scrollY >= POSITION - 100) {
    ARROW.classList.add("show");
  } else {
    ARROW.classList.remove("show");
  }
});

function hideMenu() {
  SIDEBAR.style.left = "-300px";
  if (window.innerWidth < 768) {
    BLOCK.style.display = "none";
  }
}

function showMenu() {
  SIDEBAR.style.left = "0";
  if (window.innerWidth < 768) {
    BLOCK.style.display = "block";
  }
}
