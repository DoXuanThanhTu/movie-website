const next_arrows = document.querySelectorAll(".next-arrow");
const movie_lists = document.querySelectorAll(".movie-list");

next_arrows.forEach((arrow, i) => {
  const itemNumber = movie_lists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    console.log(ratio);

    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movie_lists[i].style.transform = `translateX(${
        movie_lists[0].computedStyleMap().get("transform")[0].x.value - 280
      }px)`;
    } else {
      movie_lists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,h1,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);
ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
