// cw1
// cw2 
function showDay() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = new Date().getDay();
    document.getElementById("myParagraph").textContent = days[today];
}