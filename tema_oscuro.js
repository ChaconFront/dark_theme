const d = document,
  ls = localStorage;

export function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  //console.log($selectors)

  let moon = "🌙",
    sun = "☀️";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    //aqui establecemos la variable del local storage
    ls.setItem("theme", "light");
  };
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    //aqui establecemos la variable del local storage
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      // console.log($themeBtn.textContent);
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  /*localStorage */
  d.addEventListener("DOMContentLoaded", (e) => {
    //alert("hola desde la funcion darkTheme")
    //console.log(ls.getItem("theme"));
   //preguntamos si existe la variable theme
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
