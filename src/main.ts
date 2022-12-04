import './style.css'
import walk from '../sprites/Colour1/NoOutline/120x80_PNGSheets/_CrounchWalk.png'
import Canva from './canva'

function update(progress) {
  // Update the state of the world for the elapsed time since last render
}

function draw() {
  // Draw the state of the world
}

function loop(timestamp: number) {
  var progress = timestamp - lastRender
  console.log(progress)
  update(progress)
  draw()

  lastRender = timestamp
  window.requestAnimationFrame(loop)
}
let lastRender = 0
window.requestAnimationFrame(loop)