const dark = "dark.css";
const checkbox = document.getElementById("toggle");
checkbox.onclick = trigger;
const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = dark;
let toggle = localStorage.getItem("mode");
if (toggle === "dark") {
    document.head.appendChild(stylesheet);
    checkbox.innerHTML = "☀️";
}

function trigger() {
    if (toggle === "dark") {
        document.head.removeChild(stylesheet);
        toggle = "light";
        localStorage.setItem("mode", "light");
        checkbox.innerHTML = "🌘";
    } else {
        document.head.appendChild(stylesheet);
        toggle = "dark";
        localStorage.setItem("mode", "dark");
        checkbox.innerHTML = "☀️";
    }
}