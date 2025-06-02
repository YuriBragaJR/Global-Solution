        document.addEventListener("DOMContentLoaded", function() {
            // Inicializa o mapa
            var map = L.map('map').setView([-23.6807, -46.5000], 12); // Coordenadas iniciais (São Paulo)

            // Adiciona camada de mapa padrão
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            // Lista de locais seguros com coordenadas
            var locaisSeguros = [
                { nome: "Abrigo Central", lat: -23.681, lng: -46.500 },
                { nome: "Hospital de Emergência", lat: -23.685, lng: -46.510 },
                { nome: "Ponto de Apoio Comunitário", lat: -23.690, lng: -46.520 }
            ];

            // Adiciona marcadores para cada local seguro
            locaisSeguros.forEach(function(local) {
                L.marker([local.lat, local.lng]).addTo(map)
                    .bindPopup("📍 " + local.nome)
                    .openPopup();
            });
        });