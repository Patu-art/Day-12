"use strict";
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const mediaQuery = window.matchMedia("(min-width: 791px)");
function setMenuState(open, restoreFocus = false) {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  navigation.classList.toggle("is-open", open);
  if (restoreFocus) menuToggle.focus();
}
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    setMenuState(menuToggle.getAttribute("aria-expanded") !== "true");
  });
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
      setMenuState(false, true);
    }
  });
  document.addEventListener("click", (event) => {
    if (navigation.classList.contains("is-open") &&
        !navigation.contains(event.target) &&
        !menuToggle.contains(event.target)) setMenuState(false);
  });
  mediaQuery.addEventListener("change", (event) => {
    if (event.matches) setMenuState(false);
  });
}
