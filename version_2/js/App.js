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
  const mediumScreen = window.matchMedia("(min-width: 600px) and (max-width: 920px)");
  const smallScreen = window.matchMedia("(max-width: 600px)");

  const petShopGif = document.querySelector("#Pet-shop-gif");
  const petShopDes = document.querySelector("#Pet-shop-des");
  const techCon = document.querySelectorAll(".tech-container");
  projectOne.addEventListener("mouseover", () => {
    if (smallScreen.matches) {
      petShopDes.classList.add("mouseover-over");
    }  else {
      petShopDes.classList.add("mouseover-right");
    }
    petShopGif.src = ("Images/Pet_Shop.gif");
    projectOne.style.zIndex = "100";
  });
  projectOne.addEventListener("mouseout", () => {
    petShopGif.src = ("Images/Pet_Shop.png");
    petShopDes.classList.remove("mouseover-left", "mouseover-over", "mouseover-right");
    // petShopDes.classList.add("pro-des")
    projectOne.style.zIndex = "0";
  });

  const cinAppGif = document.querySelector("#cinema-app-pic");
  const cinAppDes = document.querySelector("#cinema-app-des");
  projectTwo.addEventListener("mouseover", () => {
    if (smallScreen.matches) {
      cinAppDes.classList.add("mouseover-over");
    }  else {
      cinAppDes.classList.add("mouseover-left");
    }
    cinAppGif.src = ("Images/Cinema_App.gif");
    projectTwo.style.zIndex = "100";
  });
  projectTwo.addEventListener("mouseout", () => {
    cinAppGif.src = ("Images/Cinema_App.png");
    cinAppDes.classList.remove("mouseover-left", "mouseover-over", "mouseover-right");
    projectTwo.style.zIndex = "0";
  });

  const gymAppPic = document.querySelector("#gym-manager-pic");
  const gymAppDes = document.querySelector("#gym-app-des");
  projectThree.addEventListener("mouseover", () => {
    if (mediumScreen.matches) {
      gymAppDes.classList.add("mouseover-right");
    } else if (smallScreen.matches) {
      gymAppDes.classList.add("mouseover-over");
    }  else {
      gymAppDes.classList.add("mouseover-left");
    }
    gymAppPic.src = ("Images/Gym_App.gif");
    projectThree.style.zIndex = "100";
  });
  projectThree.addEventListener("mouseout", () => {
    gymAppPic.src = ("Images/Gym_App.jpg");
    gymAppDes.classList.remove("mouseover-left", "mouseover-over", "mouseover-right");
    projectThree.style.zIndex = "0";
  });

  const ghibliGif = document.querySelector("#ghibli-app-pic");
  const ghibliDes = document.querySelector("#ghibli-app-des");
  projectFour.addEventListener("mouseover", () => {
    if (mediumScreen.matches) {
      ghibliDes.classList.add("mouseover-left");
    } else if (smallScreen.matches) {
      ghibliDes.classList.add("mouseover-over");
    } else {
      ghibliDes.classList.add("mouseover-right");
    }
    ghibliGif.src = ("Images/Ghibli_App.gif");
    projectFour.style.zIndex = "100";
  });
  projectFour.addEventListener("mouseout", () => {
    ghibliGif.src = ("Images/Ghibli_App.png");
    ghibliDes.classList.remove("mouseover-left", "mouseover-over", "mouseover-right");
    // petShopDes.classList.add("pro-des")
    projectFour.style.zIndex = "0";
  });

  const covidAppGif = document.querySelector("#covid-app-pic");
  const covidAppDes = document.querySelector("#covid-app-des");
  projectFive.addEventListener("mouseover", () => {
    if (mediumScreen.matches) {
      covidAppDes.classList.add("mouseover-right");
    } else if (smallScreen.matches) {
      covidAppDes.classList.add("mouseover-over");
    } else {
      covidAppDes.classList.add("mouseover-left");
    }
    covidAppGif.src = ("Images/COVID_App.gif");
    projectFive.style.zIndex = "100";
  });
  projectFive.addEventListener("mouseout", () => {
    covidAppGif.src = ("Images/COVID_App.png");
    covidAppDes.classList.remove("mouseover-left", "mouseover-over", "mouseover-right");
    projectFive.style.zIndex = "0";
  });
  //Responsive navbar
  const icon = document.querySelector("#icon")

  icon.addEventListener("click", () => {
      var nav = document.getElementById("topnav");
      if (nav.className === "nav") {
        nav.className += " responsive";
      } else {
        nav.className = "nav";
      }
    })
  })
