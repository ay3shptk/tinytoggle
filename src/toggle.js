const checkbox = document.getElementById("toggle");
checkbox.onclick = trigger
const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
let toggle = localStorage.getItem('mode');
if (toggle == "d") {
    stylesheet.href = dark;
    document.head.appendChild(stylesheet);
    checkbox.innerHTML = "☀️";
}


function trigger() {
    if (toggle == "d") {
        document.head.removeChild(stylesheet);
        toggle = "l";
        localStorage.setItem("mode", "l");
        checkbox.innerHTML = "🌘";

    } else {
        stylesheet.href = dark;
        document.head.appendChild(stylesheet);
        toggle = "d";
        localStorage.setItem("mode", "d");
        checkbox.innerHTML = "☀️";

    }
}

function changestyle(link) {
    dark = link
}