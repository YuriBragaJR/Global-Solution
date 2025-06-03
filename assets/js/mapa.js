        let map = L.map('map').setView([-23.63, -46.57], 13); // São Caetano do Sul

        let googleMapsTileLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            attribution: '&copy; Google'
        });

        googleMapsTileLayer.addTo(map);

        let locaisSeguros = [
            { nome: "Hospital São Caetano", lat: -23.6255, lng: -46.5668 },
            { nome: "Pronto Socorro Municipal", lat: -23.6201, lng: -46.5650 },
            { nome: "Centro de Abrigo Emergencial", lat: -23.6302, lng: -46.5705 },
            { nome: "Corpo de Bombeiros", lat: -23.6267, lng: -46.5712 },
            { nome: "Unidade de Resgate", lat: -23.6283, lng: -46.5608 }
        ];

        locaisSeguros.forEach(function(local) {
            L.marker([local.lat, local.lng])
                .addTo(map)
                .bindPopup(local.nome);
        });