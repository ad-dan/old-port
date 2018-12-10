const ab = document.getElementById('abt');
const abbie = document.querySelector('#about').getBoundingClientRect();
const workBtn = document.querySelector('#work-btn');
const workie = document.querySelector('#work').getBoundingClientRect();
const contBtn = document.querySelector('#contact-btn');
const contactie = document.querySelector('#contact').getBoundingClientRect();
const burger = document.querySelector('.navbar-burger');
const nav = document.querySelector('.navbar-menu');

burger.addEventListener('click', () => {
  nav.classList.toggle('is-active');
});

let change = 0;

window.addEventListener('scroll', e => {
  if (window.scrollY >= abbie.y && window.scrollY < workie.y && change != 1) {
    change = 1;
    ab.classList.add('is-hover');
    workBtn.classList.remove('is-hover');
    contBtn.classList.remove('is-hover');
    return;
  }
  if (
    window.scrollY >= workie.y &&
    window.scrollY < contactie.y - 499 &&
    change != 2
  ) {
    ab.classList.remove('is-hover');
    workBtn.classList.add('is-hover');
    contBtn.classList.remove('is-hover');
    change = 2;
    return;
  }
  if (window.scrollY >= contactie.y - 500 && change != 3) {
    change = 3;
    ab.classList.remove('is-hover');
    workBtn.classList.remove('is-hover');
    contBtn.classList.add('is-hover');
    return;
  }
  if (window.scrollY < abbie.y && change != 0) {
    ab.classList.remove('is-hover');
    workBtn.classList.remove('is-hover');
    contBtn.classList.remove('is-hover');
    change = 0;
  }
});

ab.addEventListener('click', () => {
  scrollTo({
    top: abbie.y,
    behavior: 'smooth'
  });
});

workBtn.addEventListener('click', () => {
  scrollTo({
    top: workie.y,
    behavior: 'smooth'
  });
});

contBtn.addEventListener('click', () => {
  scrollTo({
    top: contactie.y,
    behavior: 'smooth'
  });
});

const devStrings = [
  'javaScript dev',
  'web dev',
  'designer',
  'coder',
  'app developer',
  'neet'
];
let txt = Math.floor(Math.random() * 5);
let nxt = devStrings[txt];

const typ = new TypeIt('.typeit', {
  strings: nxt,
  afterString: (s, q, instance) => {
    txt = (txt + 1) % 5;
    nxt = devStrings[txt];
    typ
      .pause(500)
      .delete()
      .type(nxt);
  }
});

AOS.init();
