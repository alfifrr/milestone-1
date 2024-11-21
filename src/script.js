document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const iconHamburger = document.querySelectorAll("svg");
  const dropdown = document.getElementById("dropdown");
  let dropdownState = false;

  hamburgerBtn.addEventListener("click", function () {
    // toggle dropdown state between true and false
    dropdownState = !dropdownState;

    if (dropdownState) {
      dropdown.style.display = "block";
      iconHamburger[0].style.display = "none";
      iconHamburger[1].style.display = "block";
    } else {
      dropdown.style.display = "none";
      iconHamburger[0].style.display = "block";
      iconHamburger[1].style.display = "none";
    }
  });

  // adding gizmo class to all anchor tags (dev)
  // const allLinks = document.querySelectorAll("a");
  // allLinks.forEach(function (link) {
  //   link.classList.add("gizmo");
  // });

  // offset scroll by 75px on all anchor tags click
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // pick the target id starting after # symbol (e.g. #about becomes about)
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    });
  });
});
