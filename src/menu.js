(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const menuLink = [...document.querySelectorAll(".menu-item")];

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });

  const closeMenu = () => {
        menuBtnRef.classList.remove("is-open");
        mobileMenuRef.classList.remove("is-open");
    };

    menuLink.forEach((item) => {
        item.addEventListener("click", closeMenu);
    });
})();

$(document).ready(function() {
  $(window).resize(function(){
    var windowWidth = $(window).width();
    if (windowWidth > 1365)
      $(".nav.is-open").removeClass("is-open");
    
    if (windowWidth > 1365)
      $(".hamburger.is-open").removeClass("is-open");
  });
});