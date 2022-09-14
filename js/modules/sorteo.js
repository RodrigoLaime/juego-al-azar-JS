const d = document;
export default function sorteo(btn, selector) {
  const obtenerGanador = (selector) => {
    const $jugadores = d.querySelectorAll(selector);

    console.log($jugadores);

    const random = Math.floor(Math.random() * $jugadores.length);

    const ganador = $jugadores[random];

    return `El que cosina es ${ganador.textContent}`;
  };
  d.addEventListener("click", (event) => {
    if (event.target.matches(btn)) {
      //event.target:(si el evento) .matches(btn):(coincide con el btn) se cumple la condicon
      const resultado = obtenerGanador(selector);
      console.log(event.target); //imprimir resultado
      /* Swal.fire("Any fool can use a computer") */
      Swal.fire(`${resultado}`);
    }
  });
}
