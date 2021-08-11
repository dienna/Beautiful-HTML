// Just some random variables.
const _pi = 3.141;
const _2b2tseed = -4172144997902289642;

// This replaces your HTML element with an iframe showing rickroll. For a button: <button onclick="rickrollElementById('demo');" id="demo">Click Me!</button>
// How to use: use double or single quotes for the element id: rickrollElementById('element id'); or rickrollElementById("element id");
function rickrollElementById(rickroll) {
document.getElementById(rickroll).innerHTML = '<iframe width="1280" height="720" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}
