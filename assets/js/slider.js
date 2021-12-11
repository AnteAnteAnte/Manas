
const sliderContainer = document.querySelector("header");
const sliderBtnLeft = document.querySelector(".slider--btn-left");
const sliderBtnRight = document.querySelector(".slider--btn-right");
const sliderHeading = document.querySelector(".slider--heading");
const sliderHeadingFour = document.querySelector(".slider--heading-four");


const sliderImage = [
  {
    src: "assets/images/dnevni-boravak.png",
    heading: "Mertojak",
    headingFour: "Izgradnja novih stanova",
  },
  {
    src: "assets/images/buildings.png",
    heading: "Dizajn Stanova",
    headingFour:
      "Dizajniramo vaše stanove baš onakve kakve želite",
  },
  {
    src: "assets/images/kuhinja.png",
    heading: "Team",
    headingFour: "Surađujemo sa raznim firmama i voljni smo upoznati vaše projekte",
  },
  {
    src: "assets/images/kuhinja.png",
    heading: "Team",
    headingFour: "Surađujemo sa raznim firmama i voljni smo upoznati vaše projekte",
  } 
];

let slideCounter = 0;

const startSlider = () => {
  sliderContainer.style.backgroundImage =
  `url(${sliderImage[0].src})`;
  sliderHeading.innerHTML = sliderImage[0].heading;
  sliderHeadingFour.innerHTML = sliderImage[0].headingFour;
};

sliderBtnRight.addEventListener("click", () => {
  sliderContainer.style.backgroundImage = `
  url(${sliderImage[slideCounter + 1].src})`;
  sliderHeading.innerHTML = sliderImage[slideCounter + 1].heading;
  sliderHeadingFour.innerHTML = sliderImage[slideCounter + 1].headingFour;
  slideCounter++;
  console.log(slideCounter)
  sliderContainer.classList.add("fadeIn");
  setTimeout(() => {
    sliderContainer.classList.remove("fadeIn");
    sliderHeading.classList.remove("fadeIn")
  }, 1000)
  
  
  if(slideCounter === 3) {
      sliderContainer.style.backgroundImage = `
      url(${sliderImage[0].src})`;
      sliderHeading.innerHTML = sliderImage[0].heading;
      sliderHeadingFour.innerHTML = sliderImage[0].headingFour;
      slideCounter = 0;

      sliderContainer.classList.add("fadeIn");
      setTimeout(() => {
          sliderContainer.classList.remove("fadeIn")
      }, 1000)
  } 
});

sliderBtnLeft.addEventListener("click", () => {
  if (/* slideCounter === 3 ||  */slideCounter === 0) {
    sliderContainer.style.backgroundImage = `
    url(${sliderImage[1].src})`;
    sliderHeading.innerHTML = sliderImage[0].heading;
    sliderHeadingFour.innerHTML = sliderImage[0].headingFour;
    slideCounter = 3;

    sliderContainer.classList.add("fadeIn");
    setTimeout(() => {
        sliderContainer.classList.remove("fadeIn")
    }, 1000)
} 
    sliderContainer.style.backgroundImage = `
    url(${sliderImage[slideCounter - 1].src})`;
    sliderHeading.innerHTML = sliderImage[slideCounter - 1].heading;
    sliderHeadingFour.innerHTML = sliderImage[slideCounter - 1].headingFour;
    slideCounter--;
  console.log(slideCounter)
    sliderContainer.classList.add("fadeIn");
    setTimeout(() => {
        sliderContainer.classList.remove("fadeIn");
    }, 1000)

})

startSlider();