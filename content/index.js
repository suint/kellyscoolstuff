import "./main.scss"; // loads all css
import { doExample } from "./js/example"; // loads the function doExample() from example.js

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = "It works!";
  doExample();
});