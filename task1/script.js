const heartButtons = document.querySelectorAll(".heart-icon");
let favoriteCount = 0;

heartButtons.forEach((heart) => {
  heart.addEventListener("click", () => {
    const liked = heart.classList.contains("active");

    if (!liked) {
      heart.classList.add("active");
      favoriteCount++;
      heart.setAttribute("data-fav", "true");

      console.log("Added to favorites", favoriteCount);
    } else {
      heart.classList.remove("active");
      favoriteCount--;
      heart.setAttribute("data-fav", "false");

      console.log("Removed from favorites", favoriteCount);
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
const buyButtons = document.querySelectorAll(".buy-button");

buyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    console.log("Item added to cart", cartCount);
  });
});
