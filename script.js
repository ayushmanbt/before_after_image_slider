const divider = document.getElementById("divider")
const dragger = document.getElementById("dragger")

const photo = document.getElementById("top")

const holder = document.getElementById("holder")

holder.addEventListener("mousemove",(e)=>{
  let mouseX = e.clientX;
  let holderBoundingBox = holder.getBoundingClientRect();
  let distance = mouseX - holderBoundingBox.x
  divider.style["left"] = distance + "px"
  photo.style["clip-path"] = `rect(auto ${distance}px auto auto)`
})