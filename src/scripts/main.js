document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);
        
        let nummeroAleatorio = Math.random() * numeroMaximo;

        nummeroAleatorio = Math.floor(nummeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = nummeroAleatorio
        document.querySelector('.resultado').style.display = 'block';
    })
})