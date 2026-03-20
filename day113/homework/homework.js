// hw3
const themeBtn = document.getElementById("themeBtn");

function applyTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.className = savedTheme;
}

themeBtn.addEventListener("click", () => {
    const current = document.body.className;
    const next = current === "light" ? "dark" : "light";
    document.body.className = next;
    localStorage.setItem("theme", next);
});

applyTheme();


// hw4
let visits = Number(localStorage.getItem("visits")) || 0;
visits++;
localStorage.setItem("visits", visits);
console.log("Visits:", visits);


// hw5
const input = document.getElementById("nameInput");

input.value = localStorage.getItem("savedName") || "";

input.addEventListener("input", () => {
    localStorage.setItem("savedName", input.value);
});
