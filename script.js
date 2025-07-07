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
                    document.querySelector('.moonImg').scr = destination.images.png

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
                    document.querySelector('.moonImg').scr = destination.images.png

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
                    document.querySelector('.moonImg').scr = destination.images.png

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
                    document.querySelector('.moonImg').scr = destination.images.png

                }
                
            });
        });

        const douglas = document.querySelector('.douglas');
        const mark = document.querySelector('.mark');
        const victor = document.querySelector('.victor');
        const anousheh = document.querySelector('.');

        const crew = data.crew
        console.log(crew)
        douglas.addEventListener('click', () => {
            crew.forEach((crew, index) => {
                if(index === 0){anousheh
                    document.querySelector('.crewRole').innerHTML = crew.role;
                    document.querySelector('.crewName').innerHTML = crew.name;
                    document.querySelector('.crewContent').innerHTML = crew.bio;
                    document.querySelector('.crewImg').scr = crew.images.png;

                }
            });
        });


        mark.addEventListener('click', () => {
            crew.forEach((crew, index) => {
                if(index === 1){
                    document.querySelector('.crewRole').innerHTML = crew.role;
                    document.querySelector('.crewName').innerHTML = crew.name;
                    document.querySelector('.crewContent').innerHTML = crew.bio;
                    document.querySelector('.crewImg').scr = crew.images.png;

                }
            });
        });

        victor.addEventListener('click', () => {
            crew.forEach((crew, index) => {
                if(index === 2){
                    document.querySelector('.crewRole').innerHTML = crew.role;
                    document.querySelector('.crewName').innerHTML = crew.name;
                    document.querySelector('.crewContent').innerHTML = crew.bio;
                    document.querySelector('.crewImg').scr = crew.images.png;

                }
            });
        })

        anousheh.addEventListener('click', () => {
            crew.forEach((crew, index) => {
                if(index === 2){
                    document.querySelector('.crewRole').innerHTML = crew.role;
                    document.querySelector('.crewName').innerHTML = crew.name;
                    document.querySelector('.crewContent').innerHTML = crew.bio;
                    document.querySelector('.crewImg').scr = crew.images.png;

                }
            });
        })



    });