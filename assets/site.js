const cookieBanner = document.querySelector("[data-cookie-banner]");

if (cookieBanner && localStorage.getItem("arma-cookie-choice") === null) {
  cookieBanner.classList.add("is-visible");
}

document.querySelectorAll("[data-cookie-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.cookieChoice === "accepted") {
      localStorage.setItem("arma-cookie-choice", "accepted");
    }
    if (cookieBanner) {
      cookieBanner.classList.remove("is-visible");
    }
  });
});
