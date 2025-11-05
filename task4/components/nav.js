document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pill")) {
    document.querySelector(".pill.active")?.classList.remove("active");
    e.target.classList.add("active");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
