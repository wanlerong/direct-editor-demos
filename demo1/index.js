import {Editor} from "direct-editor"

let theEditor = new Editor(document.getElementById("container"), null)
theEditor.hi()
document.getElementById("bold-btn").addEventListener('click', (event) => {
  theEditor.bold()
})