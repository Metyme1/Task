const heart = document.getElementById("heartBtn");
let fav = false;

const cartBtn = document.querySelector(".buy-button");
let inCart = false;

heart.addEventListener("click", () => {
  fav = !fav;
  heart.classList.toggle("active");

  if (fav) {
    console.log("Added to favorites");
  } else {
    console.log("Removed from favorites");
  }
});

cartBtn.addEventListener("click", () => {
  inCart = !inCart;

  if (inCart) {
    cartBtn.textContent = "Add to cart";
    console.log("Item added to cart");
  } else {
    cartBtn.textContent = "Add to Cart";
    console.log("Item removed from cart");
  }
});
