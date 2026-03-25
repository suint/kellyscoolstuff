
export function initMoveLine() {
  let projects = document.getElementsByClassName("project");
  for (var i = 0; i < projects.length; i++) {
    if (i === 0) {
      var elementRect = projects[i].getBoundingClientRect();
      let containerRect = document.getElementById("line-container").getBoundingClientRect();
      let lineY = document.getElementById("line-y");
      let lineX = document.getElementById("line-x");
      lineY.setAttribute("y2", (elementRect.bottom - containerRect.top) * .2475);
      lineX.setAttribute("y1", (elementRect.bottom - containerRect.top) * .2475);
      lineX.setAttribute("y2", (elementRect.bottom - containerRect.top) * .2475);
    }
    projects[i].addEventListener("mouseover", moveLine);
  }
}

export function moveLine(event) {
  const multiplier = 0.2475;
  let lineY = document.getElementById("line-y");
  let lineX = document.getElementById("line-x");
  let container = document.getElementById("line-container");
  var elementRect = event.target.getBoundingClientRect();
  let containerRect = container.getBoundingClientRect();
  lineY.setAttribute("y2", (elementRect.bottom - containerRect.top) * multiplier);
  lineX.setAttribute("y1", (elementRect.bottom - containerRect.top) * multiplier);
  lineX.setAttribute("y2", (elementRect.bottom - containerRect.top) * multiplier);
}


export default () => "?nocache=" + Date.now();