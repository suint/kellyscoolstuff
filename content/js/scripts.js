export function initMoveLine() {
  const margin = 21;
  let lineContainer = document.getElementById("line-container");
  let projects = document.getElementsByClassName("link");
  if (lineContainer && projects.length > 0) {
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

export function initGalleryButtons() {
  let gallery = document.getElementById("gallery");
  if (gallery) {
    let galleryButtonLeft = document.getElementById("gallery-button-left");
    let galleryButtonRight = document.getElementById("gallery-button-right");
    galleryButtonLeft.addEventListener("click", galleryButtonLeftClick);
    galleryButtonRight.addEventListener("click", galleryButtonRightClick);
    let galleryCount = document.getElementById("gallery-count");
    let galleryItems = document.getElementsByClassName("gallery-item");
    galleryCount.textContent = "1/" + galleryItems.length;
    for (let i = 0; i < galleryItems.length; i++) {
      let item = galleryItems[i];
      const galleryWidth = gallery.offsetWidth;
      const itemWidth = item.scrollWidth;
      const margin = (galleryWidth - itemWidth) / 2;
      console.log("padding: 0 " + margin + "px 0 " + margin + "px;");
      item.setAttribute("style", "padding: 0 " + margin + "px 0 " + margin + "px;");
    }
  }
}

export function galleryButtonLeftClick(event) {
  let gallery = document.getElementById("gallery");
  let galleryCount = document.getElementById("gallery-count");
  let countText = galleryCount.textContent;
  let currentIndex = parseInt(countText.split("/")[0]);
  let totalCount = parseInt(countText.split("/")[1]);
  if (currentIndex > 1) {
    galleryCount.textContent = (currentIndex - 1) + "/" + totalCount;
  }
  gallery.scrollBy({
    left: -gallery.offsetWidth,
    behavior: "smooth"
  });
}

export function galleryButtonRightClick(event) {
  let gallery = document.getElementById("gallery");
  let galleryCount = document.getElementById("gallery-count");
  let countText = galleryCount.textContent;
  let currentIndex = parseInt(countText.split("/")[0]);
  let totalCount = parseInt(countText.split("/")[1]);
  if (currentIndex < totalCount) {
    galleryCount.textContent = (currentIndex + 1) + "/" + totalCount;
  }
  gallery.scrollBy({
    left: gallery.offsetWidth,
    behavior: "smooth"
  });
}


export default () => "?nocache=" + Date.now();