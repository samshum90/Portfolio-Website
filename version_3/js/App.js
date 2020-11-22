// When the user scrolls the page, execute myFunction
window.addEventListener("scroll", myFunction);

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var navBarSticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= navBarSticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// project Box animations
document.addEventListener("DOMContentLoaded", () => {
  const projectOne = document.querySelector("#project1");
  const projectTwo = document.querySelector("#project2");
  const projectThree = document.querySelector("#project3");
  const projectFour = document.querySelector("#project4");
  const projectFive = document.querySelector("#project5");
  const projectSix = document.querySelector("#project6");
  const projectSeven = document.querySelector("#project7");
  const projectEight = document.querySelector("#project8");
  const projectNine = document.querySelector("#project9");
  const projectTen = document.querySelector("#project10");
  const projectEleven = document.querySelector("#project11");
  const projectTwelfth = document.querySelector("#project12");
  const projectThirteen = document.querySelector("#project13");

  const proBoxOne = document.querySelector("#pro-box1");
  const proBoxTwo = document.querySelector("#pro-box2");
  const proBoxThree = document.querySelector("#pro-box3");
  const proBoxFour = document.querySelector("#pro-box4");
  const proBoxFive = document.querySelector("#pro-box5");
  const proBoxSix = document.querySelector("#pro-box6");
  const proBoxSeven = document.querySelector("#pro-box7");
  const proBoxEight = document.querySelector("#pro-box8");
  const proBoxNine = document.querySelector("#pro-box9");
  const proBoxTen = document.querySelector("#pro-box10");
  const proBoxEleven = document.querySelector("#pro-box11");
  const proBoxTwelfth = document.querySelector("#pro-box12");
  const proBoxThirteen = document.querySelector("#pro-box13");

  const mediumScreen = window.matchMedia(
    "(min-width: 900px) and (max-width: 1350px)"
  );
  const smallScreen = window.matchMedia("(max-width: 900px)");
  const techCon = document.querySelectorAll(".tech-container");

  const petShopGif = document.querySelector("#Pet-shop-gif");
  const petShopDes = document.querySelector("#Pet-shop-des");
  projectOne.addEventListener("mouseover", () => {
    if (!smallScreen.matches) {
      petShopDes.classList.add("mouseover-right");
      projectOne.style.zIndex = "100";
    }
    petShopGif.src = "Images/Pet_Shop.gif";
    proBoxOne.style.backgroundColor = "#3B3D47";
  });
  projectOne.addEventListener("mouseout", () => {
    proBoxOne.style.backgroundColor = "#282C34";
    petShopGif.src = "Images/Pet_Shop.png";
    petShopDes.classList.remove("mouseover-right");
    projectOne.style.zIndex = "0";
  });

  const cinAppGif = document.querySelector("#cinema-app-pic");
  const cinAppDes = document.querySelector("#cinema-app-des");
  projectTwo.addEventListener("mouseover", () => {
    if (!smallScreen.matches) {
      cinAppDes.classList.add("mouseover-left");
      projectTwo.style.zIndex = "100";
    }
    proBoxTwo.style.backgroundColor = "#3B3D47";
    cinAppGif.src = "Images/Cinema_App.gif";
  });
  projectTwo.addEventListener("mouseout", () => {
    proBoxTwo.style.backgroundColor = "#282C34";
    cinAppGif.src = "Images/Cinema_App.png";
    cinAppDes.classList.remove("mouseover-left");
    projectTwo.style.zIndex = "0";
  });

  const gymAppPic = document.querySelector("#gym-manager-pic");
  const gymAppDes = document.querySelector("#gym-app-des");
  projectThree.addEventListener("mouseover", () => {
    if (!smallScreen.matches) {
      if (mediumScreen.matches) {
        gymAppDes.classList.add("mouseover-right");
      } else {
        gymAppDes.classList.add("mouseover-left");
      }
      projectThree.style.zIndex = "100";
    }
    proBoxThree.style.backgroundColor = "#405375";
    gymAppPic.src = "Images/Gym_App.gif";
  });
  projectThree.addEventListener("mouseout", () => {
    proBoxThree.style.backgroundColor = "#23395e";
    gymAppPic.src = "Images/Gym_App.jpg";
    gymAppDes.classList.remove(
      "mouseover-left",
      "mouseover-over",
      "mouseover-right"
    );
    projectThree.style.zIndex = "0";
  });

  const ghibliGif = document.querySelector("#ghibli-app-pic");
  const ghibliDes = document.querySelector("#ghibli-app-des");
  projectFour.addEventListener("mouseover", () => {
    if (!smallScreen.matches) {
      if (mediumScreen.matches) {
        ghibliDes.classList.add("mouseover-left");
      } else {
        ghibliDes.classList.add("mouseover-right");
      }
      projectFour.style.zIndex = "100";
    }
    proBoxFour.style.backgroundColor = "#5FBDE6";
    ghibliGif.src = "Images/Ghibli_App.gif";
  });
  projectFour.addEventListener("mouseout", () => {
    proBoxFour.style.backgroundColor = "#0598ce";
    ghibliGif.src = "Images/Ghibli_App.png";
    ghibliDes.classList.remove("mouseover-left", "mouseover-right");
    projectFour.style.zIndex = "0";
  });

  const covidAppGif = document.querySelector("#covid-app-pic");
  const covidAppDes = document.querySelector("#covid-app-des");
  projectFive.addEventListener("mouseover", () => {
    if (!smallScreen.matches) {
      if (mediumScreen.matches) {
        covidAppDes.classList.add("mouseover-right");
      } else {
        covidAppDes.classList.add("mouseover-left");
      }
      projectFive.style.zIndex = "100";
    }
    covidAppGif.src = "Images/COVID_App.gif";
  });
  projectFive.addEventListener("mouseout", () => {
    covidAppGif.src = "Images/COVID_App.png";
    covidAppDes.classList.remove("mouseover-left", "mouseover-right");
    projectFive.style.zIndex = "0";
  });

  const blackjackGameGif = document.querySelector("#blackjack-game-pic");
  const blackjackGameDes = document.querySelector("#blackjack-des");
  projectSix.addEventListener("mouseover", () => {
    if (!smallScreen.matches) {
      blackjackGameDes.classList.add("mouseover-left");
    }
    proBoxSix.style.backgroundColor = "#363B50";
    blackjackGameGif.src = "Images/blackjack.gif";
    projectSix.style.zIndex = "100";
  });
  projectSix.addEventListener("mouseout", () => {
    proBoxSix.style.backgroundColor = "#1A2137";
    blackjackGameGif.src = "Images/blackjack.png";
    blackjackGameDes.classList.remove("mouseover-left");
    projectSix.style.zIndex = "0";
  });

  const fantasyAdventureGif = document.querySelector("#fantasy-adventure-pic");
  const fantasyAdventureDes = document.querySelector("#fantasy-adventure-des");
  projectSeven.addEventListener("mouseover", () => {
    if (!smallScreen.matches) {
      fantasyAdventureDes.classList.add("mouseover-right");
      projectSeven.style.zIndex = "100";
    }
    proBoxSeven.style.backgroundColor = "#363B50";
    fantasyAdventureGif.src = "Images/fantasy-adventure.gif";
  });
  projectSeven.addEventListener("mouseout", () => {
    proBoxSeven.style.backgroundColor = "#1A2137";
    fantasyAdventureGif.src = "Images/fantasy-adventure.png";
    fantasyAdventureDes.classList.remove("mouseover-right");
    projectSeven.style.zIndex = "0";
  });

  const shopGif = document.querySelector("#shop-pic");
  const shopDes = document.querySelector("#shop-des");
  projectEight.addEventListener("mouseover", () => {
    if (!smallScreen.matches) {
      shopDes.classList.add("mouseover-left");
      projectEight.style.zIndex = "100";
    }
    shopGif.src = "Images/shop.gif";
  });
  projectEight.addEventListener("mouseout", () => {
    shopGif.src = "Images/shop.png";
    shopDes.classList.remove("mouseover-left");
    projectEight.style.zIndex = "0";
  });

  const discretionGif = document.querySelector("#dis-cretion-pic");
  const discretionDes = document.querySelector("#dis-cretion-des");
  projectNine.addEventListener("mouseover", () => {
    if (!smallScreen.matches) {
      if (mediumScreen.matches) {
        discretionDes.classList.add("mouseover-right");
      } else {
        discretionDes.classList.add("mouseover-left");
      }
      projectNine.style.zIndex = "100";
    }
    discretionGif.src = "Images/dis-cretion.gif";
  });
  projectNine.addEventListener("mouseout", () => {
    discretionGif.src = "Images/dis-cretion.png";
    discretionDes.classList.remove("mouseover-left", "mouseover-right");
    projectNine.style.zIndex = "0";
  });

  const tictactoeGif = document.querySelector("#tictactoe-pic");
  const tictactoeDes = document.querySelector("#tictactoe-des");
  projectTen.addEventListener("mouseover", () => {
    if (!smallScreen.matches) {
      if (mediumScreen.matches) {
        tictactoeDes.classList.add("mouseover-left");
      } else {
        tictactoeDes.classList.add("mouseover-right");
      }
      projectTen.style.zIndex = "100";
    }
    proBoxTen.style.backgroundColor = "#393939";
    tictactoeGif.src = "Images/TicTacToe.gif";
  });
  projectTen.addEventListener("mouseout", () => {
    proBoxTen.style.backgroundColor = "#1e1e1e";
    tictactoeGif.src = "Images/TicTacToe.png";
    tictactoeDes.classList.remove("mouseover-right");
    tictactoeDes.classList.remove("mouseover-left");
    projectTen.style.zIndex = "0";
  });

  const technikaGif = document.querySelector("#hotel_technika-pic");
  const technikaDes = document.querySelector("#hotel_technika-des");
  projectEleven.addEventListener("mouseover", () => {
    if (!smallScreen.matches) {
      if (mediumScreen.matches) {
        technikaDes.classList.add("mouseover-right");
      } else {
        technikaDes.classList.add("mouseover-left");
      }
      projectEleven.style.zIndex = "100";
    }
    technikaGif.src = "Images/Hotel_Technika.gif";
  });
  projectEleven.addEventListener("mouseout", () => {
    technikaGif.src = "Images/Hotel_Technika.png";
    technikaDes.classList.remove("mouseover-right");
    technikaDes.classList.remove("mouseover-left");
    projectEleven.style.zIndex = "0";
  });

  const recipeGif = document.querySelector("#recipe_book-pic");
  const recipeDes = document.querySelector("#recipe_book-des");
  projectTwelfth.addEventListener("mouseover", () => {
    if (!smallScreen.matches) {
      recipeDes.classList.add("mouseover-left");
      projectTwelfth.style.zIndex = "100";
    }
    recipeGif.src = "Images/Recipe_Book.gif";
  });
  projectTwelfth.addEventListener("mouseout", () => {
    recipeGif.src = "Images/Recipe_Book.png";
    recipeDes.classList.remove("mouseover-left", "mouseover-right");
    projectTwelfth.style.zIndex = "0";
  });

  const spendItGif = document.querySelector("#spend_it-pic");
  const spendItDes = document.querySelector("#spend_it-des");
  projectThirteen.addEventListener("mouseover", () => {
    if (!smallScreen.matches) {
      spendItDes.classList.add("mouseover-right");
      projectThirteen.style.zIndex = "100";
    }
    // projectThirteen.style.backgroundColor = "#363B50";
    spendItGif.src = "Images/Spend_It.gif";
  });
  projectThirteen.addEventListener("mouseout", () => {
    // proBoxSeven.style.backgroundColor = "#1A2137";
    spendItGif.src = "Images/Spend_It.png";
    spendItDes.classList.remove("mouseover-right");
    projectThirteen.style.zIndex = "0";
  });

  //Responsive navbar
  const icon = document.querySelector("#icon");

  icon.addEventListener("click", () => {
    var nav = document.getElementById("topnav");
    if (nav.className === "nav") {
      nav.className += " responsive";
    } else {
      nav.className = "nav";
    }
  });
});
