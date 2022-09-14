import sorteo from "./modules/sorteo.js";
import sorteoDos from "./modules/sorteo2.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  sorteo("#btn", ".jugador");
  sorteoDos('sorteo-dos', 'agregar-jugador', 'ganador-btn-dos','lista-jugadores');
});
