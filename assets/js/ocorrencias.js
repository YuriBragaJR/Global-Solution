let notificationCount = 0;
const userSentAlerts = new Set();
const fakeAddresses = [
    "Rua das Palmeiras, Centro - Cidade Fictícia",
    "Avenida Brasil, Bairro Industrial - Cidade Simulada",
    "Rua do Comércio, Bairro Novo - Região Teste",
    "Avenida dos Estados, Zona Norte - Cidade Experimental",
    "Praça Central, Centro - Local de Simulação"
];

document.getElementById("simulateAlert").addEventListener("click", function() {
    const type = document.getElementById("alertType").value;

    if (!type) {
        alert("Por favor, escolha uma ocorrência antes de simular um alerta.");
        return;
    }

    if (userSentAlerts.has(type)) {
        alert("Você já enviou esta ocorrência e não pode adicionar outra.");
        return;
    }

    const randomAddress = fakeAddresses[Math.floor(Math.random() * fakeAddresses.length)];
    addNotificationToCard(type, randomAddress);
});

function addNotificationToCard(type, address) {
    const listElement = document.getElementById(`${type}-list`);
    const countElement = document.getElementById(`${type}-count`);

    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = `Local: ${address}`;

    listElement.appendChild(listItem);

    let currentCount = parseInt(countElement.textContent.replace("Notificações: ", ""));
    countElement.textContent = `Notificações: ${currentCount + 1}`;

    userSentAlerts.add(type);
    
    // Atualizando o total de notificações
    notificationCount++;
    document.getElementById("notificationCount").textContent = notificationCount;
}