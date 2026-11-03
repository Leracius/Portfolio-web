// Apply the saved preference before the first paint to avoid a light flash.
(() => {
  let saved;
  try {
    saved = localStorage.getItem("portfolio-theme");
  } catch {}
  const theme =
    saved === "dark" || saved === "light"
      ? saved
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#141813" : "#f7f8f2");
})();
