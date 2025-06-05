

function enviarMensagem() {
            let mensagem = document.getElementById("mensagem").value;
            if (mensagem.trim() !== "") {
                let novoItem = document.createElement("li");
                novoItem.className = "list-group-item";
                novoItem.textContent = "Você: " + mensagem;
                document.getElementById("chat").appendChild(novoItem);
                document.getElementById("mensagem").value = "";
            }
        
        }

document.getElementById("mensagem").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
        event.preventDefault(); 
        enviarMensagem();
    }
});


            const user = {
        nome: "Usuário",
        autenticado: true
    };

    if (user.autenticado) {
        document.getElementById("user-name").textContent = user.nome;
        document.getElementById("user-name-hero").textContent = user.nome;
    }