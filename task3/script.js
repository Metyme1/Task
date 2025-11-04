const heartButtons = document.querySelectorAll(".heart-icon");
let favoriteCount = 0;
// Close button click
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("successModal").classList.remove("show");
});

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

const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
}

const cartButtons = document.querySelectorAll(".floating-cart");

cartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "form.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const successMsg = document.getElementById("successMsg");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

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

    if (first.value.trim() === "") {
      first.nextElementSibling.textContent = "Name is required";
      first.classList.add("invalid");
      valid = false;
    }

    const phoneRegex = /^(9\d{8}|07\d{8})$/;
    const phoneError = phone.closest(".input-group").querySelector(".error");

    if (phone.value.trim() === "") {
      phoneError.textContent = "Phone number is required";
      phone.classList.add("invalid");
      valid = false;
    } else {
      const phoneRegex = /^(9\d{8}|7\d{8})$/;
      if (!phoneRegex.test(phone.value.trim())) {
        phoneError.textContent = "Enter valid phone (9XXXXXXXX or 07XXXXXXXX)";
        phone.classList.add("invalid");
        valid = false;
      }
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (email.value.trim() === "") {
      email.nextElementSibling.textContent = "Email is required";
      email.classList.add("invalid");
      valid = false;
    } else {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email.value.trim())) {
        email.nextElementSibling.textContent = "Invalid email format";
        email.classList.add("invalid");
        valid = false;
      }
    }

    if (pass.value.trim() === "") {
      pass.closest(".input-group").querySelector(".error").textContent =
        "Password is required";

      pass.classList.add("invalid");
      valid = false;
    } else if (pass.value.length < 8) {
      pass.closest(".input-group").querySelector(".error").textContent =
        "Minimum 8 characters required";

      pass.classList.add("invalid");
      valid = false;
    }

    if (confirm.value.trim() === "") {
      confirm.closest(".input-group").querySelector(".error").textContent =
        "Confirm your password";

      confirm.classList.add("invalid");
      valid = false;
    } else if (pass.value !== confirm.value) {
      confirm.closest(".input-group").querySelector(".error").textContent =
        "Passwords do not match";

      confirm.classList.add("invalid");
      valid = false;
    }
    if (valid) {
      form.reset();
      document.getElementById("successModal").classList.add("show");
    }
  });
});
