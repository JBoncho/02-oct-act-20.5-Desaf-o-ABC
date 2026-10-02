const contador = document.getElementById("contador");
const letrasDescubiertas = new Set();
const cards = document.querySelectorAll(".flip-card");



function filtrarLetras(tipo) {

    cards.forEach(card => {

        const contenedor = card.parentElement;


        if (tipo === "todas") {

            contenedor.style.display = "";

        } else if (card.dataset.tipo === tipo) {

            contenedor.style.display = "";

        } else {

            contenedor.style.display = "none";
        }

    });

}

function voltearCard(card) {
    card.classList.toggle("volteada");
}

