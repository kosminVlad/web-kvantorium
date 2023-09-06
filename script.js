const redTitle = document.getElementById("red-title")
const blueTitle = document.getElementById("blue-title")

redTitle.addEventListener(
  "click", () => redTitle.classList.add("red-title")
)

blueTitle.addEventListener(
  "dblclick", () => blueTitle.classList.add("blue-title")
)