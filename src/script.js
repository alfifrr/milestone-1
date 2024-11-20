document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const iconHamburger = document.querySelectorAll("svg");
  let dropdownState = false;

  hamburgerBtn.addEventListener("click", function () {
    dropdownState = !dropdownState;
    console.log(dropdownState);

    iconHamburger[0].style.display = dropdownState ? "none" : "block";
    iconHamburger[1].style.display = dropdownState ? "block" : "none";
  });

  // adding gizmo class
  const allLinks = document.querySelectorAll("a");
  allLinks.forEach(function (link) {
    link.classList.add("gizmo");
  });
});
