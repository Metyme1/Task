let posts = [];
let currentPage = 1;
const perPage = 10;

// Fetch posts
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    posts = data.slice(0, 20); // Only 20
    renderCards();
  });

// Create Card-One HTML
function createCard(post) {
  const imgURL = "shoe.png";

  return `
    <div class="product-card card-one">
        <div class="product-image">
            <span class="badge">Post</span>
            <div class="heart-icon" data-fav="false">❤</div>
            <img src="${imgURL}" alt="img" />
        </div>

        <div class="product-details">
            <h2 class="product-title">${post.title.slice(0, 22)}...</h2>
            <p class="product-description" title="${post.body}">
              ${post.body.slice(0, 60)}...
            </p>

            <div class="bottom-row">
               
                <button class="buy-button">Add to cart</button>
            </div>
        </div>
    </div>`;
}

function renderCards() {
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  posts.slice(start, end).forEach((post) => {
    container.innerHTML += createCard(post);
  });

  document.getElementById(
    "page-indicator"
  ).textContent = `${currentPage} / ${Math.ceil(posts.length / perPage)}`;
}

// Buttons
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
