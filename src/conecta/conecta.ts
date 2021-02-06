import yellowPiece from './imagenes/piezamarilla.png';
import redPiece from './imagenes/piezaroja.png';
import emptyCell from './imagenes/tablero.png';

let turno = 0;
let ganador = '';

document.addEventListener('DOMContentLoaded', () => {
  crearTablero();
});

function crearTablero() {
  const tablero = document.getElementById('tablero');
  const FIL = 6;
  const COL = 7;
  for (let i = 0; i < FIL; i++) {
    for (let j = 0; j < COL; j++) {
      const celda = document.createElement('div');
      const idCelda = i + 'x' + j;
      celda.id = idCelda;
      celda.classList.add('celda');
      celda.addEventListener('click', e => {
        colocarFicha(<HTMLElement>e.target);
      });
      tablero.appendChild(celda);
    }
  }
}

function colocarFicha(celda: HTMLElement) {
  if (ganador != '') {
    return 0;
  }
  const col = celda.id[2];
  const idCelda = getIdCelda(col);
  const ficha = document.createElement('img');

  ficha.style.margin = '5px';
  if (idCelda != -1) {
    if (turno == 0) {
      ficha.src = redPiece;
      ficha.className = 'roja';
      turno = 1;
    } else {
      ficha.setAttribute('src', 'imagenes/piezamarilla.png');
      ficha.className = 'amarilla';
      turno = 0;
    }
    document.getElementById(idCelda.toString()).appendChild(ficha);
  }
  if (finDeJuego()) {
    return 0;
  }
}

function getIdCelda(col: string) {
  for (var i = 5; i > -1; i--) {
    var idCelda = i + 'x' + col;
    if (document.getElementById(idCelda).innerHTML == '') {
      return idCelda;
    }
  }
  return -1;
}

//Devolvemos 0 si la fila no tiene 4 fichas adyacentes, devolvemos roja si hay 4 rojas adyacentes, y devolvemos amarillas si hay 4 amarillas adyacentes
function comprobarFilas() {
  var fil = 6;
  var col = 7;

  var cont = 0;
  for (var i = 0; i < fil; i++) {
    var celda1 = document.getElementById(i + 'x' + 0);
    for (var j = 1; j < col; j++) {
      if (cont > 3) return celda2.firstChild.className;

      var idCelda = i + 'x' + j;
      celda2 = document.getElementById(idCelda);
      if (celda2.innerHTML != '') {
        if (celda1.innerHTML == celda2.innerHTML) {
          cont++;
        } else {
          cont = 1;
        }
      } else {
        cont = 0;
      }

      celda1 = celda2;
    }
  }

  return 0;
}

function comprobarColumnas() {
  var fil = 6;
  var col = 7;

  var cont = 0;
  for (var i = 0; i < col; i++) {
    var celda1 = document.getElementById(0 + 'x' + i);
    for (var j = 1; j < fil; j++) {
      if (cont > 3) return celda2.firstChild.className;

      var idCelda = j + 'x' + i;
      celda2 = document.getElementById(idCelda);
      if (celda2.innerHTML != '') {
        if (celda1.innerHTML == celda2.innerHTML) {
          cont++;
        } else {
          cont = 1;
        }
      } else {
        cont = 0;
      }

      console.log(celda1.id + ' ' + celda2.id);
      celda1 = celda2;
    }
  }

  return 0;
}

function finDeJuego() {
  var ganador = comprobarFilas();
  if (ganador != 0) {
    console.log('Fin de juego', ganador);
    return true;
  }
  ganador = comprobarColumnas();
  if (ganador != 0) {
    console.log('Fin de juego', ganador);
    return true;
  }
  return false;
}
