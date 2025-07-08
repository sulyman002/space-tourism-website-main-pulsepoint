const icon_hamburger = document.querySelector('.icon_hamburger');
const closeNav = document.querySelector('.closeNav');
const navContent = document.querySelector('.navContent');

icon_hamburger.addEventListener('click', () => {
    navContent.style.display = 'flex'

});

closeNav.addEventListener('click', () => {
    navContent.style.display = 'none'


});

fetch('starter-code/data.json')
    .then(response => response.json())
    .then(data => {

        const destination = data.destinations;
        const crews = data.crew;
        console.log(destination)
        
        const moon = document.querySelector('.moon');
        const mars = document.querySelector('.mars');
        const europa = document.querySelector('.europa');
        const titan = document.querySelector('.titan');

        moon.addEventListener('click', () => {
            destination.forEach((destination, index) => {
                if(index === 0) {
                    document.querySelector('.destinationName').innerHTML = destination.name.toUpperCase();
                    document.querySelector('.destinationDetails').innerHTML = destination.description;
                    document.querySelector('.destinationAvg').innerHTML = destination.distance;
                    document.querySelector('.destinationTravelTime').innerHTML = destination.travel;
                    document.querySelector('.moonImg').src = destination.images.png

                }
                
            });
        });

        mars.addEventListener('click', () => {
            destination.forEach((destination, index) => {
                if(index === 1) {
                    document.querySelector('.destinationName').innerHTML = destination.name.toUpperCase();
                    document.querySelector('.destinationDetails').innerHTML = destination.description;
                    document.querySelector('.destinationAvg').innerHTML = destination.distance;
                    document.querySelector('.destinationTravelTime').innerHTML = destination.travel;
                    document.querySelector('.moonImg').src = destination.images.png

                }
                
            });
        });

        europa.addEventListener('click', () => {
            destination.forEach((destination, index) => {
                if(index === 2) {
                    document.querySelector('.destinationName').innerHTML = destination.name.toUpperCase();
                    document.querySelector('.destinationDetails').innerHTML = destination.description;
                    document.querySelector('.destinationAvg').innerHTML = destination.distance;
                    document.querySelector('.destinationTravelTime').innerHTML = destination.travel;
                    document.querySelector('.moonImg').src = destination.images.png

                }
                
            });
        });

        titan.addEventListener('click', () => {
            destination.forEach((destination, index) => {
                if(index === 3) {
                    document.querySelector('.destinationName').innerHTML = destination.name.toUpperCase();
                    document.querySelector('.destinationDetails').innerHTML = destination.description;
                    document.querySelector('.destinationAvg').innerHTML = destination.distance;
                    document.querySelector('.destinationTravelTime').innerHTML = destination.travel;
                    document.querySelector('.moonImg').src = destination.images.png

                }
                
            });
        });

        const douglas = document.querySelector('.douglas');
        const mark = document.querySelector('.mark');
        const victor = document.querySelector('.victor');
        const anousheh = document.querySelector('.anousheh');

    
        douglas.addEventListener('click', () => {
            crews.forEach((crew, index) => {
                if(index === 0){
                    document.querySelector('.crewRole').innerHTML = crew.role.toUpperCase();
                    document.querySelector('.crewName').innerHTML = crew.name.toUpperCase();
                    document.querySelector('.crewContent').innerHTML = crew.bio;
                    document.querySelector('.crewImg').src = crew.images.png;

                }
            });
        });


        mark.addEventListener('click', () => {
            crews.forEach((crew, index) => {
                if(index === 1){
                    document.querySelector('.crewRole').innerHTML = crew.role.toUpperCase();
                    document.querySelector('.crewName').innerHTML = crew.name.toUpperCase();
                    document.querySelector('.crewContent').innerHTML = crew.bio;
                    document.querySelector('.crewImg').src = crew.images.png;

                }
            });
        });

        victor.addEventListener('click', () => {
            crews.forEach((crew, index) => {
                if(index === 2){
                    document.querySelector('.crewRole').innerHTML = crew.role.toUpperCase();
                    document.querySelector('.crewName').innerHTML = crew.name.toUpperCase();
                    document.querySelector('.crewContent').innerHTML = crew.bio;
                    document.querySelector('.crewImg').src = crew.images.png;

                }
            });
        })

        anousheh.addEventListener('click', () => {
            crews.forEach((crew, index) => {
                if(index === 3){
                    document.querySelector('.crewRole').innerHTML = crew.role.toUpperCase();
                    document.querySelector('.crewName').innerHTML = crew.name.toUpperCase();
                    document.querySelector('.crewContent').innerHTML = crew.bio;
                    document.querySelector('.crewImg').src = crew.images.png;

                }
            });
        })



    });