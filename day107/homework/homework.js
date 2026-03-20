// hw1
const solarSystemPlanets = [
    {
        planetName: "Mercury",
        planetSize: "4,879 km",
        distanceFromEarth: "77 million km",
        numberOfMoons: 0,
        missionSent: true
    },
    {
        planetName: "Venus",
        planetSize: "12,104 km",
        distanceFromEarth: "38 million km",
        numberOfMoons: 0,
        missionSent: false
    },
    {
        planetName: "Mars",
        planetSize: "6,779 km",
        distanceFromEarth: "225 million km",
        numberOfMoons: 2,
        missionSent: true
    },
    {
        planetName: "Jupiter",
        planetSize: "139,820 km",
        distanceFromEarth: "628 million km",
        numberOfMoons: 95,
        missionSent: false
    },
    {
        planetName: "Saturn",
        planetSize: "116,460 km",
        distanceFromEarth: "1.2 billion km",
        numberOfMoons: 146,
        missionSent: true
    },
    {
        planetName: "Uranus",
        planetSize: "50,724 km",
        distanceFromEarth: "2.6 billion km",
        numberOfMoons: 27,
        missionSent: false
    },
    {
        planetName: "Neptune",
        planetSize: "49,244 km",
        distanceFromEarth: "4.3 billion km",
        numberOfMoons: 14,
        missionSent: true
    }
];


const chooseRandomPlanet = () => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            const randomPlanet = solarSystemPlanets[Math.floor(Math.random() * solarSystemPlanets.length)]
            resolve(randomPlanet)
        }, 2000)
    })
}

const returnBasicInfo = planet => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve({name: planet.planetName, size: planet.planetSize, distance: planet.distanceFromEarth})
        }, 500)
    })
}

const returnPlanetMoons = planet => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve({moons: planet.numberOfMoons})
        }, 1000)
    })
}

const returnMission = planet => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (planet.missionSent) resolve({missions: planet.missionSent})
            else reject({missions: planet.missionSent})
        }, 2000)
    })
}

chooseRandomPlanet()
    .then(planet => {
        return Promise.all([returnBasicInfo(planet), returnPlanetMoons(planet), returnMission(planet)])
    })
    .then(resolved => console.log(resolved))
    .catch(rejected => console.log(rejected))
