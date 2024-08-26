let background = document.querySelector(".background");
let person = document.querySelector(".person");
let mountain = document.querySelector(".mountain");
let smoke1 = document.querySelector(".smoke1");
let smoke2 = document.querySelector(".smoke2");
let text = document.querySelector("h1");

const scrollHandle = (e) => {
  let scroll = window.scrollY;

  text.style.transform = `translate(-50%, -50%) translate3d(0, ${
    scroll * 0.85
  }px, 0)`;
  background.style.transform = `translate3d(0, ${scroll * 0.9}px, 0)`;
  mountain.style.transform = `translate3d(0, ${scroll * 0.85}px, 0)`;
  smoke1.style.transform = `translate3d(0, ${scroll * 0.7}px, 0)`;
  smoke2.style.transform = `translate3d(0, ${scroll * 0.3}px, 0)`;
  person.style.transform = `translate3d(0, ${scroll * 0.25}px, 0)`;
};

window.addEventListener("scroll", scrollHandle);
