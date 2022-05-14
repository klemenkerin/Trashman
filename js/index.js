/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var mapa;

const FRI_LAT = 46.05004;
const FRI_LNG = 14.46931;

/**
 * Ko se stran naloži, se izvedejo ukazi spodnje funkcije
 */
 window.addEventListener("load", function () {
    // Osnovne lastnosti mape
    var mapOptions = {
        center: [FRI_LAT, FRI_LNG],
        zoom: 8.5,
    };

    // Ustvarimo objekt mapa
    mapa = new L.map("mapa_id", mapOptions);

    // Ustvarimo prikazni sloj mape
    var layer = new L.TileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    );

    // Prikazni sloj dodamo na mapo
    mapa.addLayer(layer);

    // Ročno dodamo FRI na mapo
    // dodajMarker(
    //     FRI_LAT,
    //     FRI_LNG,
    //     "Fakulteta za računalništvo in informatiko",
    //     "FRI"
    // );

    // izracunajVsoto();
    // omogociHotele(false);

    // document.getElementById("odrasli").addEventListener("change", (elem) => {
    //     izracunajVsoto(elem.target.value, 200);
    // });

    // document.getElementById("otroci").addEventListener("change", (elem) => {
    //     izracunajVsoto(elem.target.value, 50);
    // });

    // document.getElementById("nocitev").addEventListener("change", (elem) => {
    //     izracunajVsoto(elem.target.value);
    // });

    // document.getElementById("najblizjiHotel")
    //     .addEventListener("click", function () {
    //         alert(
    //             "Najbližji hotel je: " + najblizjiHotelNaziv +
    //             "\nOddaljen je: " + najblizjiHotelOddaljenost.toFixed(2) + " km."
    //         );
    //     });

    // document.getElementById("radij").addEventListener("change", function () {
    //     prikaziHoteleZnotrajRadija();
    // });
});
