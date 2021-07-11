// stores the device context of the canvas we use to draw the outlines
// initialized in myInit, used in myHover and myLeave
let hdc;
// shorthand func
function byId(e) {
  return document.getElementById(e);
}

function drawPoly(coOrdStr) {
  let mCoords = coOrdStr.split(",");
  let i, n;
  n = mCoords.length;
  
  hdc.beginPath();
  hdc.moveTo(mCoords[0], mCoords[1]);
  for (i = 2; i < n; i += 2) {
    hdc.lineTo(mCoords[i], mCoords[i + 1]);
  }
  hdc.lineTo(mCoords[0], mCoords[1]);
  hdc.stroke();
}

function myHover(element) {
  let hoveredElement = element;
  let coordStr = element.getAttribute("coords");
  let areaType = element.getAttribute("shape");
  console.log("Hello World");
  
  if (areaType === "polygon") {
    drawPoly(coordStr)
  }
}

function myLeave() {
  let canvas = byId("myCanvas");
  console.log("Goodbay world");
  hdc.closePath();
  hdc.clearRect(0, 0, canvas.width, canvas.height);
}

let can = document.getElementById("myCanvas");

  // place the canvas in front of the image
  can.style.zIndex = 1;

  // get it's context
  hdc = can.getContext("2d");

  hdc.fillStyle = "red";
  hdc.strokeStyle = "red";
  hdc.lineWidth = 2;