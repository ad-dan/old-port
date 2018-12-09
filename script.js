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

window.addEventListener('scroll', e => {
  if (window.scrollY >= abbie.y && window.scrollY < workie.y) {
    ab.classList.add('is-hover');
    workBtn.classList.remove('is-hover');
    contBtn.classList.remove('is-hover');
  } else if (window.scrollY >= workie.y && window.scrollY < contactie.y) {
    ab.classList.remove('is-hover');
    workBtn.classList.add('is-hover');
    contBtn.classList.remove('is-hover');
  } else if (window.scrollY >= contactie.y) {
    ab.classList.remove('is-hover');
    workBtn.classList.remove('is-hover');
    contBtn.classList.add('is-hover');
  } else {
    ab.classList.remove('is-hover');
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
  'Javascript dev',
  'Web dev',
  'Script kiddie',
  'Coder',
  'App developer'
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
