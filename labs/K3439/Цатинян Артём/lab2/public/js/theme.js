const STORAGE_KEY = "tablely-theme";
const media = matchMedia("(prefers-color-scheme: dark)");
const root = document.documentElement;
const button = document.createElement("button");
button.type = "button";
button.className = "theme-toggle";
document.body.append(button);

const icons = {
  light:
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.9 13A8.2 8.2 0 0 1 11 3.1 8.2 8.2 0 1 0 20.9 13Z"/></svg>',
  dark: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></svg>',
};

function applyTheme(theme) {
  root.dataset.bsTheme = theme;
  const isDark = theme === "dark";
  const label = isDark ? "Включить светлую тему" : "Включить тёмную тему";
  button.innerHTML = icons[theme];
  button.setAttribute("aria-label", label);
  button.title = label;
}

button.addEventListener("click", () => {
  const next = root.dataset.bsTheme === "dark" ? "light" : "dark";
  localStorage.setItem(STORAGE_KEY, next);
  applyTheme(next);
});

media.addEventListener("change", (event) => {
  if (!localStorage.getItem(STORAGE_KEY))
    applyTheme(event.matches ? "dark" : "light");
});
applyTheme(root.dataset.bsTheme);
