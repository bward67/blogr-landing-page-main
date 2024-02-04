const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");

const desktopDropdowns = document.querySelectorAll(".desktop-dropdown");
const desktopSubmenu = document.querySelectorAll(".desktop-sub-menu-links");

const mobileMenu = document.querySelector(".mobile-menu");

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

//const arrowDown = document.querySelector(".desktop-drowdown .arrow-down");

// to get the hamburger and close button to toggle
mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("show");
  mobileMenu.classList.toggle("show");
  const icon = document.querySelector(".mobile-menu-btn img");
  //console.log(icon);
  if (mobileMenuBtn.classList.contains("show")) {
    icon.src = "./images/icon-close.svg";
  } else {
    icon.src = "./images/icon-hamburger.svg";
  }
});

mobileDropdowns.forEach((item) => {
  //so for each Product, company or connect
  //console.log(item);
  const subMenu = item.querySelector(".mobile-sub-menu-links");
  //console.log(subMenu);
  item.addEventListener("click", () => {
    subMenu.classList.toggle("show");
  });
});

/*So that we close any open mobile-sub-menu-links before opening another*/

mobileDropdowns.forEach((dropdown) => {
  //console.log(dropdown);
  const arrowDown = dropdown.querySelector(".arrow-down");
  console.log(arrowDown);
  /*so that we get just that specific arrow-down*/
  arrowDown.addEventListener("click", () => {
    /*
inside the arrowDown addEventListener we want to check is another mobile-sub-menu-link is the same as the one we are currently in (they wont be the same of course) 
we need to check ALL of the mobile-sub-menu-links so we will do a forEach loop
and if it is not the same mobile-sub-menu-links we want to close or REMOVE the "show"
*/

    mobileDropdowns.forEach(function (item) {
      //console.log(item);
      const subMenu = item.querySelector(".mobile-sub-menu-links");
      if (item !== dropdown) {
        subMenu.classList.remove("show");
      }
    });
    dropdown.classList.toggle("show");
  });
});

//for the DESKTOP MENU
desktopDropdowns.forEach((item) => {
  const subMenu = item.querySelector(".desktop-sub-menu-links");

  item.addEventListener("click", () => {
    subMenu.classList.toggle("show");
  });
});

desktopDropdowns.forEach((dropdown) => {
  //console.log(dropdown);
  const arrowDown = dropdown.querySelector(".arrow-down");
  //console.log(arrowDown);
  /*so that we get just that specific arrow-down*/
  arrowDown.addEventListener("click", () => {
    desktopDropdowns.forEach(function (item) {
      //console.log(item);
      const subMenu = item.querySelector(".desktop-sub-menu-links");
      if (item !== dropdown) {
        subMenu.classList.remove("show");
        //arrowDown.classList.toggle("show");
      }
    });
    dropdown.classList.toggle("show");
    // arrowDown.classList.toggle("show");
    /*I thought this might get my arrow to rotate back around  but
    it was moving the arrowDown underneath the title*/
  });
});
