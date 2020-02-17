const navLinks = document.querySelector(".nav-link");
const googleFontsGif = document.querySelector("#googlefonts-gif");
const marshallGif = document.querySelector("#marshall-gif");
const churchGif = document.querySelector("#church-gif");
const lynelGif = document.querySelector("#lynel-gif");
const projects = document.querySelectorAll(".project");
const email = document.querySelector("#email");
const emailButton = document.querySelectorAll(".email-button");
const navButtons = document.querySelectorAll(".nav-link li");
const containers = document.querySelectorAll("main > div"); //get the immediate children of the main tag

let controller = new ScrollMagic.Controller();

//highlights the corresponding button of the navbar depending where the user is on the webpage
function highlightNavButtons() {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    //if at the bottom of the page (used to highlight contactme button since it is at the bottom it doesn't get highlighted from just using the code in the else block)
    navButtons[2].classList.remove("highlight"); //remove and add highlight class to the aboutme and contactme buttons respectively
    navButtons[3].classList.add("highlight");
  } else {
    navButtons[3].classList.remove("highlight"); //make sure contactme button isn't highlighted
    navButtons.forEach((navButton, i) => {
      //for every nav button
      let scene = new ScrollMagic.Scene({
        triggerHook: 0.3, //trigger for animation start and end is 30% from the top
        triggerElement: containers[i], //start it when trigger reaches the top of the container
        duration: containers[i].clientHeight //stop it when trigger reaches bottom of the container
      })
        .setClassToggle(navButtons[i], "highlight") //highlight the appropriate nav button, by toggling the class highlight at start and end triggers
        .addTo(controller);
    });
  }
}

highlightNavButtons(); //run the function on page load

//scroll to correct part on click of nav buttons
navButtons.forEach((navButton, i) => {
  navButton.addEventListener("click", () => {
    let pos = containers[i].getBoundingClientRect().top - 70;
    window.scrollBy({
      top: pos,
      behavior: "smooth"
    });
  });
});
