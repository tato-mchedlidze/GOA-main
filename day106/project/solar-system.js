// Planet data: name, color, size, orbit radius, orbit period
        const planets = [
            { name:"Mercury", color:"#8c8c8c", radius:8, orbitRadius:120, orbitPeriod:0.24, link:"globe.html?planet=Mercury" },
            { name:"Venus", color:"#e6b87e", radius:15, orbitRadius:180, orbitPeriod:0.62, link:"globe.html?planet=Venus" },
            { name:"Earth", color:"#6b93d6", radius:16, orbitRadius:240, orbitPeriod:1, link:"globe.html?planet=Earth" },
            { name:"Mars", color:"#c1440e", radius:12, orbitRadius:300, orbitPeriod:1.88, link:"globe.html?planet=Mars" },
            { name:"Jupiter", color:"#c19b7a", radius:35, orbitRadius:390, orbitPeriod:11.86, link:"globe.html?planet=Jupiter" },
            { name:"Saturn", color:"#e3d8b0", radius:30, orbitRadius:480, orbitPeriod:29.46, link:"globe.html?planet=Saturn" },
            { name:"Uranus", color:"#b8e3e0", radius:25, orbitRadius:560, orbitPeriod:84.01, link:"globe.html?planet=Uranus" },
            { name:"Neptune", color:"#3669d6", radius:24, orbitRadius:640, orbitPeriod:164.8, link:"globe.html?planet=Neptune" }
        ];

        // Get DOM elements
        const solarSystem = document.getElementById('solarSystem');
        const slowDownBtn = document.getElementById('slowDown');
        const speedUpBtn = document.getElementById('speedUp');
        const speedDisplay = document.getElementById('speedDisplay');
        const resetViewBtn = document.getElementById('resetView');

        // Animation variables
        let animationSpeed = 1, time = 0, scale = 1;

        // Create planet elements and add to page
        function createSolarSystem() {
            planets.forEach(planet => {
                const planetEl = document.createElement('div');
                planetEl.className = 'planet';
                planetEl.style.width = `${planet.radius * 2}px`;
                planetEl.style.height = `${planet.radius * 2}px`;
                planetEl.style.background = `radial-gradient(circle at 30% 30%, #fff, ${planet.color})`;
                planetEl.style.boxShadow = `0 0 10px ${planet.color}`;

                // Create planet name label
                const planetName = document.createElement('div');
                planetName.className = 'planet-name';
                planetName.textContent = planet.name;
                planetEl.appendChild(planetName);

                // Click to go to planet page
                planetEl.addEventListener('click', () => { window.location.href = planet.link; });
                solarSystem.appendChild(planetEl);
            });
        }

        // Animate planets in orbits
        function animatePlanets() {
            time += 0.005 * animationSpeed;
            const planetsEl = document.querySelectorAll('.planet');
            planets.forEach((planet, index) => {
                if (planetsEl[index]) {
                    // Calculate orbital position
                    const angle = time / planet.orbitPeriod;
                    const x = Math.cos(angle) * planet.orbitRadius;
                    const y = Math.sin(angle) * planet.orbitRadius;
                    planetsEl[index].style.left = `calc(50% + ${x}px)`;
                    planetsEl[index].style.top = `calc(50% + ${y}px)`;
                }
            });
            requestAnimationFrame(animatePlanets);
        }

        // Speed control buttons
        slowDownBtn.addEventListener('click', () => {
            if (animationSpeed > 0.1) { animationSpeed *= 0.5; updateSpeedDisplay(); }
        });
        speedUpBtn.addEventListener('click', () => {
            if (animationSpeed < 10) { animationSpeed *= 2; updateSpeedDisplay(); }
        });
        
        // Update speed display text
        function updateSpeedDisplay() {
            if (animationSpeed < 0.5) speedDisplay.textContent = "Slow";
            else if (animationSpeed === 1) speedDisplay.textContent = "Normal";
            else speedDisplay.textContent = "Fast";
        }

        // Zoom functionality
        function updateZoom() { solarSystem.style.transform = `translate(-50%, -50%) scale(${scale})`; }
        
        // Reset zoom button
        resetViewBtn.addEventListener('click', () => { scale = 1; updateZoom(); });
        
        // Mouse wheel zoom
        document.addEventListener('wheel', (e) => {
            e.preventDefault();
            const zoomIntensity = 0.1;
            const wheel = e.deltaY < 0 ? 1 : -1;
            if (wheel > 0 && scale < 3) scale *= (1 + zoomIntensity);
            else if (wheel < 0 && scale > 0.5) scale /= (1 + zoomIntensity);
            updateZoom();
        });

        // Start the application
        createSolarSystem();
        animatePlanets();