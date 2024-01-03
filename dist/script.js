'use-strict';

const navList = document.querySelectorAll('.nav-list');
const tabs = document.querySelectorAll('.tabs');


// lists
const activeTab = (index) => {
    navList.forEach(navList => navList.classList.remove('active'));
    navList[index].classList.add('active');

    tabs.forEach(tabs => tabs.classList.remove('active'));        
    tabs[index].classList.add('active');
};

const destination = (index) => {
    destinationNav.forEach(entry => entry.classList.remove('active'));
    destinationNav[index].classList.add('active');
};

const crews = (index) => {
    crewNav.forEach(entry => entry.classList.remove('active'));
    crewNav[index].classList.add('active');
};

navList.forEach((list, index) => {
    list.addEventListener('click', () => {
       activeTab(index);
    });
});

activeTab(2)

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
    planetName.innerHTML = `${planets.destinations[index].name}`;
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

crews(0)
crewData(0)
