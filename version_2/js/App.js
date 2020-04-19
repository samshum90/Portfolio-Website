// When the user scrolls the page, execute myFunction
window.addEventListener('scroll', myFunction);

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var navBarSticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= navBarSticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

// project Box animations
document.addEventListener('DOMContentLoaded', () =>{

  const projectOne = document.querySelector("#project1");
  const projectTwo = document.querySelector("#project2");
  const projectThree = document.querySelector("#project3");
  const projectFour = document.querySelector("#project4");
  const projectFive = document.querySelector("#project5");
  const projectSix = document.querySelector("#project6");

  const petShopGif = document.querySelector("#Pet-shop-gif");
  const petShopDes = document.querySelector("#Pet-shop-des");
  projectOne.addEventListener("mouseover", () => {
    petShopGif.src = ("images/Pet_shop.gif");
    petShopDes.classList.add("mouseover-right");
    // petShopDes.classList.remove("pro-des");
    projectOne.style.zIndex = "100";
  });
  projectOne.addEventListener("mouseout", () => {
    petShopGif.src = ("images/Pet_shop.png");
    petShopDes.classList.remove("mouseover-right");
    // petShopDes.classList.add("pro-des")
    projectOne.style.zIndex = "0";
  });

  const cinAppGif = document.querySelector("#cinema-app-pic");
  const cinAppDes = document.querySelector("#cinema-app-des");
  projectTwo.addEventListener("mouseover", () => {
    cinAppGif.src = ("images/cinema_app.gif");
    cinAppDes.classList.add("mouseover-left");
    projectTwo.style.zIndex = "100";
  });
  projectTwo.addEventListener("mouseout", () => {
    cinAppGif.src = ("images/cinema_app.png");
    cinAppDes.classList.remove("mouseover-left");
    projectTwo.style.zIndex = "0";
  });

  const gymAppPic = document.querySelector("#gym-manager-pic");
  const gymAppDes = document.querySelector("#gym-app-des");
  gymAppPic.addEventListener("mouseover", () => {
    gymAppPic.src = ("images/gym_app.gif");
    gymAppDes.classList.add("mouseover-left");
    projectThree.style.zIndex = "100";
  });
  gymAppPic.addEventListener("mouseout", () => {
    gymAppPic.src = ("images/gym_app.jpg");
    gymAppDes.classList.remove("mouseover-left");
    projectThree.style.zIndex = "0";
  });

  const ghibliGif = document.querySelector("#ghibli-app-pic");
  const ghibliDes = document.querySelector("#ghibli-app-des");
  projectFour.addEventListener("mouseover", () => {
    ghibliGif.src = ("images/ghibli_app.gif");
    ghibliDes.classList.add("mouseover-right");
    // petShopDes.classList.remove("pro-des");
    projectFour.style.zIndex = "100";
  });
  projectFour.addEventListener("mouseout", () => {
    ghibliGif.src = ("images/ghibli_app.png");
    ghibliDes.classList.remove("mouseover-right");
    // petShopDes.classList.add("pro-des")
    projectFour.style.zIndex = "0";
  });

  const covidAppGif = document.querySelector("#covid-app-pic");
  const covidAppDes = document.querySelector("#covid-app-des");
  projectFive.addEventListener("mouseover", () => {
    covidAppGif.src = ("images/COVID_app.gif");
    covidAppDes.classList.add("mouseover-left");
    // petShopDes.classList.remove("pro-des");
    projectFive.style.zIndex = "100";
  });
  projectFive.addEventListener("mouseout", () => {
    covidAppGif.src = ("images/COVID_app.png");
    covidAppDes.classList.remove("mouseover-left");
    // petShopDes.classList.add("pro-des")
    projectFive.style.zIndex = "0";
  });
});
