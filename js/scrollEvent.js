const section = document.querySelectorAll("section");
const menuList = document.querySelectorAll("#header .menu li a");
const sinopsisCon = document.querySelector(".sinopsis_content");
const sinopsisImg = document.querySelector("#sinopsis img");
const charMenu = document.querySelector(".character_menu");
const charCon = document.querySelector(".char_desc");
const trailer = document.querySelector("#trailer iframe");
const seriesList = document.querySelectorAll("#series ul li");
const seriesWrap = document.querySelector(".series_wrap");

const ACTIVE = "active";
const SLIDER = "slider";
const FADEOUT = "fade_out";

window.addEventListener("scroll", () => {
  const currentScroll = document.body.scrollTop
    ? document.body.scrollTop
    : document.documentElement.scrollTop;

  let sectionPosArr = [];
  for (let i = 0; i < section.length; i++) {
    const sectionPosValue =
      window.pageYOffset + section[i].getBoundingClientRect().top;
    sectionPosArr.push(sectionPosValue);
  }

  menuList.forEach((a) => {
    if (
      (currentScroll >= sectionPosArr[1] && currentScroll < sectionPosArr[3]) ||
      currentScroll >= sectionPosArr[4]
    ) {
      a.style.color = "#2c2c2c";
    } else {
      a.style.color = "var(--white-color)";
    }
  });

  if (currentScroll > sectionPosArr[0]) {
    section[0].classList.add(FADEOUT);
  } else {
    section[0].classList.remove(FADEOUT);
  }
  if (currentScroll >= sectionPosArr[1]) {
    sinopsisCon.classList.add(ACTIVE);
    sinopsisCon.querySelector("p").classList.add(ACTIVE);
    sinopsisImg.classList.add(ACTIVE);
  } else {
    sinopsisCon.classList.remove(ACTIVE);
    sinopsisCon.querySelector("p").classList.remove(ACTIVE);
    sinopsisImg.classList.remove(ACTIVE);
  }
  if (currentScroll >= sectionPosArr[2]) {
    charMenu.classList.add(SHOW);
    charCon.classList.add(SHOW);
    charImg.forEach((img) => {
      if (img.alt === charName.innerText) {
        img.classList.add(SHOW);
        img.style.trasitionDelay = "0.5s";
      }
    });
  } else {
    charImg.forEach((img) => {
      img.classList.remove(SHOW);
    });
    charMenu.classList.remove(SHOW);
    charCon.classList.remove(SHOW);
  }
  if (currentScroll < sectionPosArr[3]) {
    clicked = false;
    photos.forEach((photo) => {
      photo.classList.remove(CLICKED);
      photo.querySelector("img").classList.remove(CLICKED);
    });
  }
  if (currentScroll >= sectionPosArr[3]) {
    if (!clicked) {
      slide[0].classList.add(ACTIVE);
      slide[1].classList.add(ACTIVE);
    }
    section[3].classList.add(ACTIVE);
    photos.forEach((photo) => {
      photo.classList.add(ACTIVE);
    });
  } else {
    slide[0].classList.remove(ACTIVE);
    slide[1].classList.remove(ACTIVE);
    section[3].classList.remove(ACTIVE);
    photos.forEach((photo) => {
      photo.classList.remove(ACTIVE);
    });
  }
  if (currentScroll >= sectionPosArr[4]) {
    trailer.classList.add(ACTIVE);
  } else {
    trailer.classList.remove(ACTIVE);
  }
  if (currentScroll >= sectionPosArr[5] - 30) {
    seriesWrap.classList.add(ACTIVE);
    seriesList.forEach((li) => {
      li.classList.add(SLIDER);
    });
  } else {
    seriesWrap.classList.remove(ACTIVE);
    seriesList.forEach((li) => {
      li.classList.remove(SLIDER);
    });
  }
});
