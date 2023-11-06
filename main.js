document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const numeroA = parseFloat(document.getElementById("numeroA").value);
    const numeroB = parseFloat(document.getElementById("numeroB").value);
    //parseFloat usado pq quando tentava colocar numeros maiores dava erroassim pesquisei uma forma de não acontecer

    if (numeroB <= numeroA) {
        document.querySelector(".error-message").style.display = "block";
        document.getElementById("mensagemParabens").style.display = "none"; 
    } else {
        document.querySelector(".error-message").style.display = "none";

        const envioBemSucedido = true;

        if (envioBemSucedido) {
            document.getElementById("mensagemParabens").style.display = "block";
        }
    }
});

