
export function initMoveLine() {
  console.log("init move line");
  let projects = document.getElementsByClassName("link");
  for (var i = 0; i < projects.length; i++) {
    projects[i].addEventListener("mouseover", moveLine);
  }
}

export function moveLine(event) {
  const space = 21;
  let lineY = document.getElementById("line-y");
  let lineX = document.getElementById("line-x");
  let container = document.getElementById("line-container");
  var elementRect = event.target.getBoundingClientRect();
  let containerRect = container.getBoundingClientRect();
  lineY.setAttribute("y2", ((elementRect.top - containerRect.top) + space)/containerRect.height * 100);
  lineX.setAttribute("y1", ((elementRect.top - containerRect.top) + space)/containerRect.height * 100);
  lineX.setAttribute("y2", ((elementRect.top - containerRect.top) + space)/containerRect.height * 100);
}


export default () => "?nocache=" + Date.now();