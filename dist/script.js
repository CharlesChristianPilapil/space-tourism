'use-strict';

const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const navIcon = document.querySelector('.nav-icon');
const navOverlay = document.querySelector('.nav-overlay');
const mobileList = document.querySelectorAll('.mobile-nav-list');


mobileList.forEach((list, index) => {
    list.addEventListener('click', () => {
        activeTab(index);
        closeMobileNav();
    })
})


const updateBurgerIcon = () => {
    const iconPath = mobileNav.classList.contains('active') ? 'assets/shared/icon-close.svg' : 'assets/shared/icon-hamburger.svg';
    navIcon.src = iconPath;
};

const toggleMobileNav = () => {
    mobileNav.classList.toggle('active');
    navOverlay.style.zIndex = mobileNav.classList.contains('active') ? '1' : '0';
};

const closeMobileNav = () => {
    navOverlay.style.zIndex = '0';
    mobileNav.classList.remove('active');
    updateBurgerIcon();
};

hamburger.addEventListener('click', () => {
    toggleMobileNav();
    updateBurgerIcon();
});

navOverlay.addEventListener('click', closeMobileNav);


const navList = document.querySelectorAll('.nav-list');
const tabs = document.querySelectorAll('.tabs');
const explore = document.querySelector('.explore');

let tabName = '';
let styles = '';

const background = document.querySelector('.background');

const changeBackgound = () => {
    background.style.backgroundImage = `url(assets/${tabName}/background-${tabName}-${styles}.jpg)`;
}

// lists
const activeTab = (index) => {
    navList.forEach(navList => navList.classList.remove('active'));
    navList[index].classList.add('active');

    tabs.forEach(tabs => tabs.classList.remove('active'));        
    tabs[index].classList.add('active');

    mobileList.forEach(mobileList => mobileList.classList.remove('active'));        
    mobileList[index].classList.add('active');

    if(index == 0) tabName = 'home';

    if(index == 1) tabName = 'destination';

    if(index == 2) tabName = 'crew';

    if(index == 3) tabName = 'technology'

    changeBackgound();
};

const destination = (index) => {
    destinationNav.forEach(entry => entry.classList.remove('active'));
    destinationNav[index].classList.add('active');
};

const crews = (index) => {
    crewNav.forEach(entry => entry.classList.remove('active'));
    crewNav[index].classList.add('active');
};

const technology = (index) => {
    techList.forEach(entry => entry.classList.remove('active'));
    techList[index].classList.add('active');
}

navList.forEach((list, index) => {
    list.addEventListener('click', () => {
       activeTab(index);
    });
});

activeTab(0);

const getData = async () => {
    const res = await fetch(constants);
    return await res.json();
};


// destination
const constants = 'data.json';
const destinationNav = document.querySelectorAll('.destination-list');
const planet = document.querySelector('.planet');
const planetName = document.querySelector('.planet-name');
const planetDescription = document.querySelector('.planet-description');
const distance = document.querySelector('.distance');
const travelTime = document.querySelector('.travel-time');

const planets = async (index) => {
    const planets = await getData();
    planet.src = planets.destinations[index].images.png;
    planet.alt = `${planets.destinations[index].name}`;

    planetName.innerHTML = `${planets.destinations[index].name.toUpperCase()}`;
    planetDescription.innerHTML = `${planets.destinations[index].description}`
    distance.innerHTML = `${planets.destinations[index].distance}`
    travelTime.innerHTML = `${planets.destinations[index].travel}`
}

destinationNav.forEach((list, index) => {
    list.addEventListener('click', () => {
        planets(index);
        destination(index);
    })
});

planets(0);
destination(0);



const crewNav = document.querySelectorAll('.crew-nav');
const crewImage = document.querySelector('.crew-image');
const crewName = document.querySelector('.crew-name');
const crewRole = document.querySelector('.crew-role');
const crewBio = document.querySelector('.crew-bio');


const crewData = async (index) => {
    const crewData = await getData();
    const data = crewData.crew;
    
    crewImage.src = data[index].images.png;
    crewImage.alt = `${data[index].name}`
    crewName.innerHTML = `${data[index].name}`;
    crewRole.innerHTML  = `${data[index].role}`;
    crewBio.innerHTML  = `${data[index].bio}`;

}

crewNav.forEach((list, index) => {
    list.addEventListener('click', () => {
        crews(index);
        crewData(index);
    })
})

crews(0);
crewData(0);



const techList = document.querySelectorAll('.tech-nav');
const techImg = document.querySelector('.tech-img');
const techName = document.querySelector('.tech-name');
const techDescription = document.querySelector('.tech-description');

const technologyData = async (index) => {
    const tech = await getData();
    const data = tech.technology;

    techName.innerHTML = `${data[index].name}`;
    techDescription.innerHTML = `${data[index].description}`;

    const updateImage = () => {
        const viewportWidth = window.innerWidth;
        let size = `${viewportWidth < 976 ? 'landscape' : 'portrait'}`;

        const image = data[index].images;
        techImg.src = image[size];
        techImg.alt = `${data[index].name}`
    };

    // Initial application of styles
    updateImage();

    // Update image on window resize
    window.addEventListener('resize', updateImage);
}

technologyData(0);


techList.forEach((list, index) => {
    list.addEventListener('click', () => {
        technology(index);
        technologyData(index)
    })
})

technology(0);

function applyStyles() {
    const viewportWidth = window.innerWidth;

    // Media query 1: Small screens
    if (viewportWidth < 676) {
        styles = 'mobile';
    }

    // Media query 2: Medium screens
    if (viewportWidth >= 676 && viewportWidth < 976) {
        styles = 'tablet';
    }

    // Media query 3: Large screens
    if (viewportWidth >= 976) {
        styles = 'desktop';
    }

    changeBackgound();
    
}

explore.addEventListener('click', () => {
    activeTab(1);
})

// Initial application of styles
applyStyles();

// Update styles on window resize
window.addEventListener('resize', applyStyles);