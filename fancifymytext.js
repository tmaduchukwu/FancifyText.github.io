

function fs() {
    alert("Hello, World");
    var x = document.getElementById("match").style.fontSize = "24pt";
}
var y;
var changeColor;
var underline;
function boo() {
    alert("boooooo");
    y = document.getElementById("match").style.fontWeight = "bold";
    changeColor = document.getElementById("match").style.color = "blue";
    underline = document.getElementById("match").style.textDecoration = "underline";
}
function revert() {
    y = document.getElementById("match").style.fontWeight = null;
    changeColor = document.getElementById("match").style.color =null;
    underline = document.getElementById("match").style.textDecoration = null;
}
function upper() {
    var changeCase = document.getElementById("match").style.textTransform = "uppercase";
    var str = document.getElementById("match").value;
    var parts = str.split(".");
    document.getElementById("match").value = parts.join("-Moo");
}