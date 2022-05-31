const slider = document.querySelector(".series_wrap ul");

setInterval(() => {
  slider.appendChild(slider.firstElementChild);
  seriesList.forEach((li) => {
    li.style.transition = "0.4s";
  });
}, 4000);
