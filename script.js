const ab = document.getElementById('abt');
const abbie = document.querySelector('#about').getBoundingClientRect();
const workBtn = document.querySelector('#work-btn');
const workie = document.querySelector('#work').getBoundingClientRect();
const contBtn = document.querySelector('#contact-btn');
const contactie = document.querySelector('#contact').getBoundingClientRect();

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
  'Javascript developer',
  'Web developer',
  'Script kiddie',
  'Coder',
  'App developer'
];
let txt = Math.floor(Math.random() * 5);
let nxt = devStrings[txt];

const typ = new TypeIt('.typeit', {
  strings: nxt,
  afterString: (s, q, instance) => {
    let newTxt = txt;
    while (newTxt == txt) {
      newTxt = Math.floor(Math.random() * 5);
    }
    nxt = devStrings[newTxt];
    typ
      .pause(500)
      .delete()
      .type(nxt);
  }
});
