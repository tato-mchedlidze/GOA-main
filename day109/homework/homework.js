// hw1
const movieContainer = document.getElementById("movies");

async function getMovies() {
    try {
        const response = await fetch("example");
        const data = await response.json();

        const movies = data.Search;
        movies.forEach(movie => {
            const div = document.createElement("div");
            div.innerHTML = `
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        <img src="${movie.Poster}" width="150">
        `;
            movieContainer.appendChild(div);
        });
    } catch (error) {
        console.log("Error loading movies:", error);
    }
}

getMovies();


// hw2
async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();
