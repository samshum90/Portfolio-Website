
const navButtons = document.querySelectorAll(".nav-link li");
const containers = document.querySelectorAll("main > div"); //get the immediate children of the main tag

let controller = new ScrollMagic.Controller();

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
