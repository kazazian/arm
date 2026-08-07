const cookieBanner = document.querySelector("[data-cookie-banner]");

if (cookieBanner && localStorage.getItem("arma-cookie-choice") === null) {
  cookieBanner.classList.add("is-visible");
}

document.querySelectorAll("[data-cookie-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    localStorage.setItem("arma-cookie-choice", button.dataset.cookieChoice);
    if (cookieBanner) {
      cookieBanner.classList.remove("is-visible");
    }
  });
});
