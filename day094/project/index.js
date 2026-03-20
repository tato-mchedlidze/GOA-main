const globeElement = document.getElementById('globeViz');
const tooltip = document.getElementById('tooltip');

// Map of country names to ISO codes
const countryCodes = {
    "Georgia": "ge",
    "United States of America": "us",
    "France": "fr",
    "Germany": "de",
    "Japan": "jp",
    "Brazil": "br",
    "Canada": "ca",
    "United Kingdom": "gb",
    "Australia": "au",
    "Russia": "ru",
    "China": "cr",
    "Mexico": "mx"
};

// Get flag URL
function flagURL(name) {
    const code = countryCodes[name];
    return code ? `https://flagcdn.com/w80/${code}.png` : '';
}

// Tooltip HTML
function tooltipHTML(country) {
    const name = country.properties.name;
    const flag = flagURL(name);
    return `<b>${name}</b>${flag ? `<img src="${flag}" width="60">` : ''}`;
}

// Create globe
const globe = Globe()(globeElement)
    .globeImageUrl('https://unpkg.com/three-globe@2.44.0/example/img/earth-blue-marble.jpg')
    .polygonCapColor(() => 'rgba(0,0,0,0)')
    .polygonSideColor(() => 'rgba(0,0,0,0)')
    .polygonStrokeColor(() => '#111'); // slightly visible borders

// Load countries
fetch('https://unpkg.com/world-atlas@2.0.2/countries-110m.json')
    .then(res => res.json())
    .then(data => {
        const countries = topojson.feature(data, data.objects.countries).features;

    globe.polygonsData(countries)
        .onPolygonHover(country => {
            tooltip.style.display = country ? 'block' : 'none';
            if (country) tooltip.innerHTML = tooltipHTML(country);
        })
        .onPolygonClick(country => {
            if (country) {
                const name = encodeURIComponent(country.properties.name);
                window.location.href = `country.html?name=${name}`;
            }
        });
});

// Move tooltip
document.addEventListener('mousemove', e => {
    tooltip.style.left = `${e.clientX + 10}px`;
    tooltip.style.top = `${e.clientY + 10}px`;
});