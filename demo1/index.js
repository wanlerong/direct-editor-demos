import {Editor,Const} from "direct-editor"

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")

let e = new Editor(document.getElementById("container"), null, (as)=>{
  btn1.className = as.bold ? 'active' : ''
  btn2.className = as.italic ? 'active' : ''
  btn3.className = as.underline ? 'active' : ''
  btn4.className = as.strikethrough ? 'active' : ''
  btn5.className = as.blockType === Const.BlockType.BLOCK_TYPE_H1 ? 'active' : ''
  btn6.className = as.blockType === Const.BlockType.BLOCK_TYPE_H2 ? 'active' : ''
  btn7.className = as.blockType === Const.BlockType.BLOCK_TYPE_H3 ? 'active' : ''
})
btn1.addEventListener('click', (event) => {
  e.toolbar.bold(!btn1.classList.contains("active"))
})
btn2.addEventListener('click', (event) => {
  e.toolbar.italic(!btn2.classList.contains("active"))
})

btn3.addEventListener('click', (event) => {
  e.toolbar.underline(!btn3.classList.contains("active"))
})

btn4.addEventListener('click', (event) => {
  e.toolbar.strikethrough(!btn4.classList.contains("active"))
})
btn5.addEventListener('click', (event) => {
  e.toolbar.title(Const.HTitleLevel.H1)
})

btn6.addEventListener('click', (event) => {
  e.toolbar.title(Const.HTitleLevel.H2)
})

btn7.addEventListener('click', (event) => {
  e.toolbar.title(Const.HTitleLevel.H3)
})