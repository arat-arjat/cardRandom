/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

window.onload = function() {
  //write your code here

  let numerosLetras = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let Palos = ["♦", "♥", "♠", "♣"];

  let numerosLetrasRandom =
    numerosLetras[Math.floor(Math.random() * numerosLetras.length)];

  let PalosRandom = Palos[Math.floor(Math.random() * Palos.length)];

  let RandomResul = PalosRandom;

  let valor = document.getElementsByClassName("center");
  valor[0].textContent = numerosLetrasRandom;

  let palosLetf = document.getElementsByClassName("left");
  palosLetf[0].textContent = RandomResul;

  let palosRight = document.getElementsByClassName("right");
  palosRight[0].textContent = RandomResul;

  if (PalosRandom == "♥" || PalosRandom == "♦") {
    palosLetf[0].style.color = "red";
    palosRight[0].style.color = "red";
  } else {
    palosLetf[0].style.color = "black";
    palosRight[0].style.color = "black";
  }
};
