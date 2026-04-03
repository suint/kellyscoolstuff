import "./main.scss"; 
import { initGalleryButtons, initMoveLine } from "./js/scripts.js";

window.addEventListener("load", function () {
  initMoveLine();
  initGalleryButtons();
});