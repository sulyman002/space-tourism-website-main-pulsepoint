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



    });