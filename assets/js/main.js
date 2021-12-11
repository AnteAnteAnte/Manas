const accordion = document.querySelector('.accordion');
const items = document.querySelectorAll('.accordion__item');

items.forEach((item) => {
  const title = item.querySelector('.accordion__title');

  title.addEventListener('click', (e) => {
    const opened_item = accordion.querySelector('.is-open');

    // Toggle trenutni item
    toggle_item(item);
  });
});

const toggle_item = (item) => {
  const body = item.querySelector('.accordion__body');
  const content = item.querySelector('.accordion__content');

  if (item.classList.contains('is-open')) {
    body.removeAttribute('style');
    item.classList.remove('is-open');
  }else {
    body.style.height = body.scrollHeight + 'px';
    item.classList.add('is-open');
  }
}

//Get the button:
let mybutton = document.getElementById("mybtn");

//Get navbar 
let navbar = document.querySelector(".main-nav")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.classList.add("show")
    navbar.classList.add("fixedNav")
  } else {
    mybutton.classList.remove("show")
    navbar.classList.remove("fixedNav")
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

function animateIcon() {
  const hamIcon = document.querySelector("#nav-icon2");
  hamIcon.classList.toggle("open")
}

const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  if (overlay.style.width === "50%") {
    overlay.style.width = "0%";
  } else {
    overlay.style.width = "50%";
  }
});

