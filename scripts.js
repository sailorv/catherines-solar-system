// Page Elements
const pageHeader = document.querySelector('header');
const solarSystemOverview = document.querySelector('.solar-system-overview');

// Add images
const solarSystemImage = document.createElement('div');
solarSystemImage.classList.add('image');
solarSystemOverview.insertAdjacentElement('afterBegin',solarSystemImage);

// Create nav element
const nav = document.createElement('ul');

// PLANET STUFF //
// Identify all planets
const planets = document.querySelectorAll('.planet');

// Create the header for the Planets nav and the list for each planet
const planetsHeader = document.createElement('li');
planetsHeader.textContent = 'Planets';
const planetsList = document.createElement('ul');

planets.forEach(planet => {
    // Declare its name
    const planetName = planet.querySelector('h3').innerHTML;
    const planetNameMachine = planetName.toLowerCase();
    if (planetName) {
        const planetLi = document.createElement('li');
        planetLi.innerHTML = `<a href="#" class="${planetNameMachine}-link">${planetName}</a>`;
        planetsList.appendChild(planetLi);
    }

    // Add to the nav list
    nav.appendChild(planetsHeader);
    nav.appendChild(planetsList);

    // Add an image 
    const planetImage = document.createElement('div');
    planetImage.classList.add('image');
    planet.insertAdjacentElement('afterBegin',planetImage);
});

// MOON STUFF //
// Identify all moons
const moons = document.querySelectorAll('.moon');

// Create the header for the moons nav and the list for each planet
const moonsHeader = document.createElement('li');
moonsHeader.textContent = 'Moons';
const moonsList = document.createElement('ul');

moons.forEach(moon => {
    // Declare its name
    const moonName = moon.querySelector('h3').innerHTML;
    let moonLink = moonName;

    // Special moon links - override automatic names
    if (moonName == 'The Moon (Earth)') {
        moonLink = 'earth-moon';
    }
    if (moonName == 'Titan (Saturn)') {
        moonLink = 'titan';
    }
    if (moonName == 'Europa (Jupiter)') {
        moonLink = 'europa';
    }
    
    if (moonName) {
        const moonLi = document.createElement('li');
        moonLi.innerHTML = `<a href="#" class="${moonLink.toLowerCase()}-link">${moonName}</a>`;
        moonsList.appendChild(moonLi);
    }

    // Add to the nav list
    nav.appendChild(moonsHeader);
    nav.appendChild(moonsList);

    // Add an image 
    const moonImage = document.createElement('div');
    moonImage.classList.add('image');
    moon.insertAdjacentElement('afterBegin',moonImage);
});

// Celestial Objects STUFF //
// Identify all Celestial Objects
const celestialObjects = document.querySelectorAll('.solar-system-objects article');

// Create the header for the celestialObjects nav and the list for each planet
const celestialObjectsHeader = document.createElement('li');
celestialObjectsHeader.textContent = 'Celestial Objects';
const celestialObjectsList = document.createElement('ul');

celestialObjects.forEach(celestialObject => {
    // Declare its name
    const celestialObjectName = celestialObject.querySelector('h3').innerHTML;
    let celestialObjectLink = celestialObjectName;

    if (celestialObjectName == 'The Asteroid Belt') {
        celestialObjectLink = 'asteroid-belt';
    }
    if (celestialObjectName == 'The Kuiper Belt') {
        celestialObjectLink = 'kuiper-belt';
    }

    if (celestialObjectName) {
        const celestialObjectLi = document.createElement('li');
        celestialObjectLi.innerHTML = `<a href="#" class="${celestialObjectLink.toLowerCase()}-link">${celestialObjectName}</a>`;
        celestialObjectsList.appendChild(celestialObjectLi);
    }

    // Add to the nav list
    nav.appendChild(celestialObjectsHeader);
    nav.appendChild(celestialObjectsList);

    // Add an image 
    const celestialObjectImage = document.createElement('div');
    celestialObjectImage.classList.add('image');
    celestialObject.insertAdjacentElement('afterBegin',celestialObjectImage);
});

// Refine Navigation
const navHeader = document.createElement('h3');
navHeader.innerHTML = `Explore <div class="explore-object"></div>`;
navHeader.classList.add('nav-header');
nav.classList.add('nav');

// Expand navigation
navHeader.onclick = function() {
    if (nav.classList.contains('visible')) {
        nav.classList.remove('visible')
    } else {
        nav.classList.add('visible');
    }
};


// Add nav to page header
if (pageHeader) {
    navWrapper = document.createElement('div');
    pageHeader.insertAdjacentElement('afterend', navWrapper);
    navWrapper.classList.add('nav-wrapper');
    navWrapper.insertAdjacentElement('afterbegin', nav);
    nav.insertAdjacentElement('beforebegin', navHeader);
}

// When 'Explore' nav is clicked, everything is hidden except the target article
const articles = document.querySelectorAll('article');

function showArticle(event) {
    event.preventDefault();
    solarSystemOverview.style.display = 'none';

    articles.forEach(article => {
        article.classList.remove('visible');
        const section = article.closest('section');
        if (section) {
            section.classList.remove('visible');
        }
    });

    let linkClass = event.target.className.replace('-link', '');

    const targetArticle = document.querySelector(`article.${linkClass}`);
    if (targetArticle) {
        targetArticle.classList.add('visible');
        const parentSection = targetArticle.closest('section');
        if (parentSection) {
            parentSection.classList.add('visible');
        }

        // Add it to the nav
        if (linkClass == "earth-moon") {
            linkClass = "The Moon"
        }
        if (linkClass == "asteroid-belt") {
            linkClass = "Asteroids"
        }
        if (linkClass == "kuiper-belt") {
            linkClass = "KUIPER BELT"
        }
        document.querySelector('.explore-object').innerHTML = linkClass;
        nav.classList.remove('visible');
    }
}

// Add click event to each link in the nav
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', showArticle);
});

// Show Mercury by default on desktop
if (window.matchMedia("(min-width: 900px)").matches) {
    document.querySelector('.mercury').classList.add('visible');
    document.querySelector('.planets').classList.add('visible');
}

// Add green to images 
const imagesList = document.querySelectorAll('article .image');

imagesList.forEach(articleImage => {
    const green = document.createElement('div');
    green.classList.add('green');
    articleImage.insertAdjacentElement('afterBegin', green);
    console.log(articleImage)
});