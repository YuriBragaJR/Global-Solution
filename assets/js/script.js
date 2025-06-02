const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

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

        function relatarOcorrencia() {
            let novoItem = document.createElement("li");
            novoItem.className = "list-group-item";
            novoItem.textContent = "⚠️ Nova ocorrência reportada - Última atualização: agora";
            document.getElementById("ocorrencias").appendChild(novoItem);
        }