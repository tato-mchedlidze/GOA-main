// Get all HTML elements we need to work with
const globeEl = document.getElementById('globeViz');
const planetSelect = document.getElementById('planetSelect');
const speedRange = document.getElementById('speedRange');
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleSidebar');
const nameEl = document.getElementById('planetName');
const factEl = document.getElementById('planetFact');
const tempEl = document.getElementById('planetTemp');
const weatherEl = document.getElementById('planetWeather');
const moreEl = document.getElementById('planetMore');

// Toggle sidebar show/hide
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    toggleBtn.textContent = sidebar.classList.contains('collapsed') ? 'Show Info' : 'Hide Info';
});

// Planet surface images
const textures = {
    mercury: "https://upload.wikimedia.org/wikipedia/commons/9/92/Solarsystemscope_texture_2k_mercury.jpg",
    venus: "https://upload.wikimedia.org/wikipedia/commons/4/40/Solarsystemscope_texture_2k_venus_surface.jpg",
    earth: "https://unpkg.com/three-globe@2.44.0/example/img/earth-blue-marble.jpg",
    mars: "https://upload.wikimedia.org/wikipedia/commons/4/46/Solarsystemscope_texture_2k_mars.jpg",
    jupiter: "https://upload.wikimedia.org/wikipedia/commons/b/be/Solarsystemscope_texture_2k_jupiter.jpg",
    saturn: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Solarsystemscope_texture_2k_saturn.jpg",
    uranus: "https://upload.wikimedia.org/wikipedia/commons/9/95/Solarsystemscope_texture_2k_uranus.jpg",
    neptune: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Solarsystemscope_texture_2k_neptune.jpg",
    moon: "https://upload.wikimedia.org/wikipedia/commons/2/26/Solarsystemscope_texture_2k_moon.jpg"
};

// Planet facts and information
const facts = {
    earth: {
        fact: "The only known planet with life and liquid water on its surface.",
        temp: "15°C average",
        weather: "Varied climates, from deserts to polar ice caps.",
        more: ["Radius ≈ 6,371 km", "One full rotation ≈ 24 hours", "70% of surface covered by water"]
    },
    mars: {
        fact: "Known as the Red Planet, home to Olympus Mons, the tallest volcano.",
        temp: "-60°C average",
        weather: "Dust storms, thin CO₂ atmosphere.",
        more: ["Has the largest volcano and canyon in the solar system", "Two small moons: Phobos & Deimos", "Evidence suggests Mars once had liquid water"]
    },
    jupiter: {
        fact: "Largest planet in the solar system with the Great Red Spot storm.",
        temp: "-145°C average",
        weather: "Gigantic storms and strong winds.",
        more: ["Mass ≈ 318× Earth", "Has at least 79 moons", "Mostly hydrogen and helium"]
    },
    saturn: {
        fact: "Famous for its beautiful ring system made of ice and rock.",
        temp: "-178°C average",
        weather: "Strong winds and massive storms.",
        more: ["Rings are thousands of km wide but thin", "Over 80 moons (Titan is the largest)", "Lowest density of all planets (could float in water)"]
    },
    uranus: {
        fact: "Rotates on its side, with extreme seasonal changes.",
        temp: "-195°C average",
        weather: "Icy atmosphere with methane clouds.",
        more: ["Axis tilt ≈ 98° (rolls on its side)", "Has faint rings and 27 known moons", "Appears blue-green due to methane"]
    },
    neptune: {
        fact: "Has the fastest winds in the solar system, up to 2,100 km/h.",
        temp: "-200°C average",
        weather: "Intense storms and dynamic clouds.",
        more: ["Farthest known major planet from the Sun", "13+ moons (Triton is largest)", "Strongest sustained winds observed"]
    },
    venus: {
        fact: "Hottest planet due to greenhouse gases, hotter than Mercury.",
        temp: "465°C average",
        weather: "Thick clouds of sulfuric acid, crushing pressure.",
        more: ["Surface pressure ~92× Earth", "Rotates very slowly and in the opposite direction", "Covered by thick reflective clouds"]
    },
    mercury: {
        fact: "Closest planet to the Sun, with extreme day-night temperature swings.",
        temp: "167°C day / -173°C night",
        weather: "No atmosphere to retain heat.",
        more: ["Smallest planet (since Pluto reclassification)", "No true atmosphere, many craters", "Orbital period ≈ 88 Earth days"]
    }
};

// Create 3D globe with Earth as default
const globe = Globe()(globeEl).globeImageUrl(textures.earth);

// Rotation speed control
let rotationSpeed = parseFloat(speedRange.value) || 0.002;
speedRange.addEventListener('input', e => { rotationSpeed = parseFloat(e.target.value); });

// Update planet display when new planet selected
function updatePlanet(planet) {
    if (!textures[planet]) return;
    
    // Update 3D globe texture
    globe.globeImageUrl(textures[planet]);
    
    // Update info panel
    nameEl.textContent = planet.charAt(0).toUpperCase() + planet.slice(1);
    factEl.textContent = facts[planet].fact;
    tempEl.textContent = facts[planet].temp;
    weatherEl.textContent = facts[planet].weather;
    
    // Update facts list
    const more = facts[planet].more || [];
    moreEl.innerHTML = '<h3>More Facts</h3>' +
        (more.length ? ('<ul>' + more.map(i => `<li>${i}</li>`).join('') + '</ul>') : '<p>No extra facts.</p>');
}

// Handle URL parameters for direct planet links
const urlPlanet = new URLSearchParams(window.location.search).get('planet');
if (urlPlanet) {
    const low = urlPlanet.toLowerCase();
    if (textures[low]) {
        planetSelect.value = low;
        updatePlanet(low);
    }
}

// Update when user selects planet from dropdown
planetSelect.addEventListener('change', e => updatePlanet(e.target.value));

// Animation loop for rotating planet
(function animate(){
    requestAnimationFrame(animate);
    const scene = typeof globe.scene === 'function' ? globe.scene() : null;
    if (scene && scene.rotation) scene.rotation.y += rotationSpeed;
})();

// Set default planet
if (!urlPlanet) updatePlanet('earth');