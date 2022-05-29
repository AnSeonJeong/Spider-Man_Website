const slide = document.querySelectorAll("#gallery .slide");
const slideList1 = slide[0].querySelectorAll(".photo");
const slideList2 = slide[1].querySelectorAll(".photo");

function makeClone() {
  for (let i = 0; i < slideList1.length; i++) {
    const colonedSlide1 = slideList1[i].cloneNode(true);
    colonedSlide1.className = "photo clone";
    slide[0].appendChild(colonedSlide1);
  }

  for (let i = slideList2.length - 1; i >= 0; i--) {
    const colonedSlide2 = slideList2[i].cloneNode(true);
    colonedSlide2.className = "photo clone";
    slide[1].prepend(colonedSlide2);
  }
}

makeClone();

const photos = document.querySelectorAll(".slide .photo");
let clicked = false;

const CLICKED = "clicked";

photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    photo.classList.toggle(CLICKED);
    photo.querySelector("img").classList.toggle(CLICKED);
    slide[0].classList.toggle(ACTIVE);
    slide[1].classList.toggle(ACTIVE);
    clicked = true;
  });
});
