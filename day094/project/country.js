// 1. Get country name from URL
const params = new URLSearchParams(window.location.search);
const countryName = params.get("name");

// 2. Country → YouTube URL mapping
const videos = {
    "Georgia": "https://www.youtube.com/watch?v=2t6gVLNCm44",
    "France": "https://www.youtube.com/watch?v=K3Iys_R90NM",
    "Japan": "https://www.youtube.com/watch?v=URDXZSJZ2ME",
    "United States of America":"https://www.youtube.com/watch?v=6KrGAHE8O3Y",
    "Germany": "https://www.youtube.com/watch?v=RglyFUv8x0U",
    "Brazil": "https://www.youtube.com/watch?v=5ad8Muc3HUI",
    "Canada": "https://www.youtube.com/watch?v=T2tHzbaFh4Q",
    "United Kingdom": "https://www.youtube.com/watch?v=b95WWTl7noI",
    "Australia": "https://www.youtube.com/watch?v=6uSulYs0euU",
    "Russia": "https://www.youtube.com/watch?v=v2tOqmnWcYE",
    "Mexico": "https://www.youtube.com/watch?v=uDiw7jrOOdQ"
};

// 3. Update title
document.getElementById("title").textContent = countryName;

// 4. Embed the correct video
const iframe = document.getElementById("factVideo");
if (videos[countryName]) {

    // Convert normal YouTube link to embed format
    const videoId = new URL(videos[countryName]).searchParams.get("v");
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
} 
else {
    document.body.innerHTML = `<h1 style="color:white;">No video available for ${countryName}</h1>`;
}