document.querySelectorAll(".service-card").forEach((card) => {
  const categoryTitle = card.querySelector(":scope > summary h3");
  const subgroups = card.querySelector(":scope > .service-subgroups");
  const onlySubcard = subgroups?.querySelector(":scope > .service-subcard:only-child");
  const subgroupTitle = onlySubcard?.querySelector(":scope > summary h4");
  const priceList = onlySubcard?.querySelector(":scope > .price-list");

  if (
    categoryTitle &&
    subgroupTitle &&
    priceList &&
    categoryTitle.textContent.trim() === subgroupTitle.textContent.trim()
  ) {
    subgroups.replaceWith(priceList);
  }
});

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
