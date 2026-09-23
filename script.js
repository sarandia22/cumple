function abrirCarta() {

const sobre = document.getElementById("sobre");
const inicio = document.getElementById("inicio");
const regalo = document.getElementById("regalo");

sobre.classList.add("abierto");

crearSerpentinas();

setTimeout(function() {

    inicio.style.display = "none";
    regalo.classList.add("mostrar");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}, 1000);

}

function crearSerpentinas() {

const colores = [
    "#52748f",
    "#7895aa",
    "#9db2c2",
    "#3e607c",
    "#c4d3dd",
    "#6c879b"
];

for (let i = 0; i < 35; i++) {

    const serpentina = document.createElement("div");

    serpentina.classList.add("serpentina");

    serpentina.style.left = Math.random() * 100 + "vw";
    serpentina.style.backgroundColor =
        colores[Math.floor(Math.random() * colores.length)];

    serpentina.style.animationDelay =
        Math.random() * 1.5 + "s";

    serpentina.style.animationDuration =
        2.5 + Math.random() * 2 + "s";

    serpentina.style.transform =
        "rotate(" + Math.random() * 360 + "deg)";

    document.body.appendChild(serpentina);

    setTimeout(function() {
        serpentina.remove();
    }, 5000);
}

}

function volverInicio() {

const regalo = document.getElementById("regalo");
const inicio = document.getElementById("inicio");

regalo.classList.remove("mostrar");

inicio.style.display = "flex";

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

}