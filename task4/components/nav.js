document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pill")) {
    document.querySelector(".pill.active")?.classList.remove("active");
    e.target.classList.add("active");
  }
});
function toggleMenu() {
  const dropdown = document.getElementById("dropdown-menu");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("dropdown-menu");
  const hamburger = document.querySelector(".hamburger");

  if (!dropdown.contains(e.target) && !hamburger.contains(e.target)) {
    dropdown.style.display = "none";
  }
});
