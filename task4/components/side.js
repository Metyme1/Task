document.querySelectorAll(".delivery-options button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelector(".delivery-options .active")
      ?.classList.remove("active");
    btn.classList.add("active");
  });
});

document.querySelectorAll(".reset").forEach((r) => {
  r.addEventListener("click", () => {
    alert("Filters reset");
  });
});
