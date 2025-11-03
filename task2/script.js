const heartButtons = document.querySelectorAll(".heart-icon");
let favoriteCount = 0;

heartButtons.forEach((heart) => {
  heart.addEventListener("click", () => {
    const liked = heart.getAttribute("data-fav") === "true";

    if (!liked) {
      heart.classList.add("active");
      heart.setAttribute("data-fav", "true");
      heart.textContent = "❤️";
      favoriteCount++;

      console.log("Added to favorites");
    } else {
      heart.classList.remove("active");
      heart.setAttribute("data-fav", "false");
      heart.textContent = "❤";
      favoriteCount--;

      console.log("Removed from favorites");
    }
  });
});

let cartCount = 0;
const cartButtons = document.querySelectorAll(".floating-cart");

cartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const added = btn.getAttribute("data-added") === "true";

    if (!added) {
      btn.classList.add("added");
      btn.setAttribute("data-added", "true");

      btn.textContent = "🛒";
      cartCount++;

      console.log("Item added to cart");
    } else {
      btn.classList.remove("added");
      btn.setAttribute("data-added", "false");

      btn.textContent = "🛒";
      cartCount--;

      console.log("Item removed from cart");
    }
  });
});

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
