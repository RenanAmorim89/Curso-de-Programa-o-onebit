import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import {
  handClearbutton,
  handleButtanPress,
  handleTyping,
} from "./keyHandlers.js";
import themeSwitcher from "./themeSwitcher.js";

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtanPress);
});

document.getElementById("clear").addEventListener("click", handClearbutton);
document.getElementById("input").addEventListener("keydown", handleTyping);
document.getElementById("equal").addEventListener("click", calculate);
document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);
document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
