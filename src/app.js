document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("submit-button");

  let rating = 0;
  let ratingCollection = document.getElementsByClassName("rating-num");

  function setRating(ele, i) {
    rating = i;
    [...ratingCollection].forEach((num) => {
      num.classList.remove("selected-rating");
    });
    ele.classList.add("selected-rating");
  }

  for (let i = 1; i < 6; i++) {
    const ele = document.getElementById(`rating-${i}`);
    ele.addEventListener("click", () => setRating(ele, i));
  }

  const ratingModal = document.querySelector(".rating-modal");
  const thankYouModal = document.querySelector(".thank-you-modal");
  const showRating = document.querySelector(".show-rating");
  button.addEventListener("click", () => {
    ratingModal.classList.add("hidden");
    thankYouModal.classList.remove("hidden");
    showRating.innerHTML = `You selected ${rating} out of 5`;
  });
});
