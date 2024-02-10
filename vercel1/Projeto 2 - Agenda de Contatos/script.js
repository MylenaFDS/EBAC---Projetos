function addContact() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    var errorMessage = document.getElementById("errorMessage");

    if (name && phone) {
        var contactTable = document.getElementById("contactItems");

        if (contactExists(name, phone)) {
            errorMessage.textContent = "O contato já existe.";
            setTimeout(() => {
                errorMessage.textContent = "";
            }, 5000)
        } else {
            var row = contactTable.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            cell1.innerHTML = name;
            cell2.innerHTML = phone;
            cell3.innerHTML = '<button onclick="deleteContact(this)">Excluir</button>';

            // Limpar os campos do formulário após adicionar o contato
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
        }
    } else {
        alert("Por favor, preencha todos os campos do formulário.");
    }
}

function contactExists(name, phone) {
    var contactTable = document.getElementById("contactItems");
    var rows = contactTable.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var storedName = rows[i].cells[0].innerHTML;
        var storedPhone = rows[i].cells[1].innerHTML;

        if (storedName === name && storedPhone === phone) {
            return true;
        }
    }

    return false;
}

function deleteContact(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
