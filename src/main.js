const userMenuBtn = document.getElementById("menu-toggle");
const userMenu = document.getElementById("user-settings");

userMenuBtn.addEventListener("click", () => {
  if (userMenuBtn.ariaExpanded === "false") {
    userMenuBtn.ariaExpanded = "true";
    userMenu.ariaHidden = "false";
  } else {
    userMenuBtn.ariaExpanded = "false";
    userMenu.ariaHidden = "true";
  }
});

const btnThemeToggler = document.getElementById("theme-toggler");
const theme = localStorage.getItem("theme");

if (theme === "dark-mode") {
  btnThemeToggler.ariaChecked = "true";
  document.body.classList.add("dark-mode");
}

btnThemeToggler.addEventListener("click", () => {
  if (btnThemeToggler.getAttribute("aria-checked") === "true") {
    btnThemeToggler.ariaChecked = "false";
    localStorage.setItem("theme", "default-mode");
    document.body.classList.remove("dark-mode");
  } else {
    localStorage.setItem("theme", "dark-mode");
    btnThemeToggler.ariaChecked = "true";
    document.body.classList.add("dark-mode");
  }
});
