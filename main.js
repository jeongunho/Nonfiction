'use strict';

const korean = document.querySelector('.korean');
const languageDrop = document.querySelector('.language-drop');
let languageToggle = 0;
korean.addEventListener('click', (e) => {
  if (!languageToggle) {
    languageDrop.classList.add('visible');
    languageToggle ++;
  } else {
    languageDrop.classList.remove('visible');
    languageToggle --;
  }
});

const mobileKorean = document.querySelector('.mobile-korean');
const mobileLanguageDrop = document.querySelector('.mobile-language-drop');
let mobileLanguageToggle = 0;
mobileKorean.addEventListener('click', (e) => {
  if (!mobileLanguageToggle) {
    mobileLanguageDrop.classList.add('visible');
    mobileLanguageToggle ++;
  } else {
    mobileLanguageDrop.classList.remove('visible');
    mobileLanguageToggle --;
  }
});

const accordionTags = document.querySelectorAll('.accordion-tag');
accordionTags.forEach(tag => {
  tag.addEventListener('click', (e) => {
    tag.classList.toggle('active');
    const menu = tag.nextElementSibling;
    if (menu.style.maxHeight) {
      menu.style.maxHeight = null;
    } else {
      menu.style.maxHeight = `${menu.scrollHeight}px`;
    }
  });
});

const header = document.querySelector('#header');
document.addEventListener('scroll', (e) => {
  const scrollTop = window.scrollY;
  if (scrollTop > 0) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

const scrollRotate = () => {
  const logo = document.querySelector('.nonfiction');
  logo.style.transform = `rotate(${window.pageYOffset/600}rad)`;
}
document.addEventListener('scroll', scrollRotate);

const addClass = (category, header) => {
  category.classList.add('clicked');
  header.classList.add('scroll');
  barsToggle++;
}
const removeClass = (category, header) => {
  category.classList.remove('clicked');
  header.classList.remove('scroll');
  barsToggle--;
}
const bars = document.querySelector('.bars');
let barsToggle = 0;
bars.addEventListener('click', () => {
  const mobileCategory = document.querySelector('#mobile-category');
  if (!barsToggle && window.scrollY == 0) {
    addClass(mobileCategory, header);
  } else if (!barsToggle && window.scrollY > 0) {
    addClass(mobileCategory, header);
  } else if (barsToggle && window.scrollY == 0) {
    removeClass(mobileCategory, header);
  } else if (barsToggle && window.scrollY > 0) {
    mobileCategory.classList.remove('clicked');
    barsToggle--;
  }
});