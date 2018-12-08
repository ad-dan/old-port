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
