// ================================
// ❤️ FAVORITE BUTTON LOGIC
// ================================
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

// ================================
// 🌙 THEME TOGGLE BUTTON
// ================================
const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
}

// ================================
// 🛒 Floating cart route
// ================================
const cartButtons = document.querySelectorAll(".floating-cart");

cartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "form.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const successMsg = document.getElementById("successMsg");

  if (!form) return; // safety for other pages

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED ✅");

    const first = document.getElementById("firstName");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const pass = document.getElementById("password");
    const confirm = document.getElementById("confirmPassword");

    const errors = document.querySelectorAll(".error");
    errors.forEach((err) => (err.textContent = ""));

    document.querySelectorAll("input").forEach((i) => {
      i.classList.remove("invalid");
    });

    let valid = true;

    // NAME
    if (first.value.trim() === "") {
      first.nextElementSibling.textContent = "Name is required";
      first.classList.add("invalid");
      valid = false;
    }

    // PHONE (Ethiopian)
    const phoneRegex = /^9\d{8}$/;
    if (!phoneRegex.test(phone.value.trim())) {
      phone.parentElement.nextElementSibling.textContent =
        "Enter valid phone (9XXXXXXXX)";
      phone.classList.add("invalid");
      valid = false;
    }

    // EMAIL
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.nextElementSibling.textContent = "Invalid email format";
      email.classList.add("invalid");
      valid = false;
    }

    // PASSWORD
    if (pass.value.length < 8) {
      pass.parentElement.nextElementSibling.textContent =
        "Minimum 8 characters required";
      pass.classList.add("invalid");
      valid = false;
    }

    // CONFIRM PASSWORD
    if (pass.value !== confirm.value) {
      confirm.parentElement.nextElementSibling.textContent =
        "Passwords do not match";
      confirm.classList.add("invalid");
      valid = false;
    }

    if (valid) {
      successMsg.textContent = "✅ Account created successfully!";
      form.reset();
    }
  });
});
