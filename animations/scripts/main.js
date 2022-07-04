var head = document.getElementById("header");
var boton = document.getElementById("boton");
var display = document.getElementById("display");
var i = 0;
var c = 0;
function changeMode() {
    boton.style.transform = "translateX(28px)";
    document.body.style.background = "#292929";
}
function changeMode2() {
    boton.style.transform = "translateX(0%)";
    document.body.style.background = "white";
}
function general() {
    if (i==0) {
        changeMode();
        return i = 1;
    } else if (i>0) {
        changeMode2();
        return i = 0;
    }        
}
function display_menu() {
    if (c==0) {
        display.style.visibility = "visible";
        return c = 1;
    } else if (c>0) {
        display.style.visibility = "hidden";
        return c = 0;
    }
}

document.getElementById("container").onclick = function() {
    general();
}
document.getElementById("menu").onclick = function() {
    display_menu();
}

