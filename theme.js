const themeKey = "duoduo-preview-theme";

function setDark(dark) {
  document.documentElement.dataset.theme = dark ? "dark" : "light";
}

let dark = false;
try {
  dark = localStorage.getItem(themeKey) === "dark";
} catch {}
setDark(dark);

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#theme");
  button.setAttribute("aria-pressed", String(dark));
  button.addEventListener("click", () => {
    dark = !dark;
    setDark(dark);
    button.setAttribute("aria-pressed", String(dark));
    try { localStorage.setItem(themeKey, dark ? "dark" : "light"); } catch {}
  });
});

