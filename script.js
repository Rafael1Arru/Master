function toggleSwitch() {
  const html = document.documentElement
  html.classList.toggle("light-mode")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light-mode")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "/assets/avatar.png")
  }
}
