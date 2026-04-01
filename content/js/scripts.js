
export function initMoveLine() {
  const margin = 21;
  let lineContainer = document.getElementById("line-container");
  let projects = document.getElementsByClassName("link");
  lineContainer.setAttribute("style", "height: " + (projects.length * margin * 2) + "px;");
  for (var i = 0; i < projects.length; i++) {
    projects[i].addEventListener("mouseover", moveLine);
    if (i === 0) {
      console.log("initializing line position");
      let lineY = document.getElementById("line-y");
      let lineX = document.getElementById("line-x");
      let container = document.getElementById("line-container");
      let elementRect = projects[i].getBoundingClientRect();
      let containerRect = container.getBoundingClientRect();
      lineY.setAttribute("y2", ((elementRect.top - containerRect.top) + margin)/containerRect.height * 100);
      lineX.setAttribute("y1", ((elementRect.top - containerRect.top) + margin)/containerRect.height * 100);
      lineX.setAttribute("y2", ((elementRect.top - containerRect.top) + margin)/containerRect.height * 100);
    }
  }
}

export function moveLine(event) {
  const margin = 21;
  let lineY = document.getElementById("line-y");
  let lineX = document.getElementById("line-x");
  let container = document.getElementById("line-container");
  let elementRect = event.target.getBoundingClientRect();
  let containerRect = container.getBoundingClientRect();
  lineY.setAttribute("y2", ((elementRect.top - containerRect.top) + margin)/containerRect.height * 100);
  lineX.setAttribute("y1", ((elementRect.top - containerRect.top) + margin)/containerRect.height * 100);
  lineX.setAttribute("y2", ((elementRect.top - containerRect.top) + margin)/containerRect.height * 100);
}


export default () => "?nocache=" + Date.now();