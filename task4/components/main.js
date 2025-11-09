function initMainScript() {
  let posts = [];
  let currentPage = 1;
  const perPage = 10;

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      posts = data.slice(0, 20);
      renderCards();
    });

  function renderCards() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";

    const start = (currentPage - 1) * perPage;
    const pageItems = posts.slice(start, start + perPage);

    pageItems.forEach((item) => {
      cards.innerHTML += cardTemplate(item);
    });

    document.getElementById("pageIndicator").innerHTML = `
      <span class="circle">${currentPage}</span>
    `;
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentPage < 2) {
      currentPage++;
      renderCards();
    }
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderCards();
    }
  });
}

function cardTemplate(item) {
  return `
  <div class="t4-card second-style">
      <div class="product-image">
  <span class="badge">Trending</span>
  <div class="heart-icon"><i class="fa-regular fa-heart"></i></div>
  <img src="shoe.png" alt="Product" />
</div>

      <div class="product-details">
        <p class="product-title">${item.title.slice(0, 22)}...</p>
        <p class="product-description">${item.body}</p>
        <div class="bottom-row no-overlay">
          <span class="product-price">$${(Math.random() * 200 + 20).toFixed(
            2
          )}</span>
          <button class="buy-button">Add to Cart</button>
        </div>
      </div>
      <div class="hover-overlay">
        <h3>${item.title}</h3>
        <span class="rating">⭐️⭐️⭐️⭐️☆</span>
        <p>${item.body}</p>
      </div>
  </div>`;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < 2) {
    currentPage++;
    renderCards();
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderCards();
  }
});
