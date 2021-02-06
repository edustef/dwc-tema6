import alfilB from './fichas/alfilB.png';
import alfilN from './fichas/alfilN.png';
import caballoB from './fichas/caballoB.png';
import caballoN from './fichas/caballoN.png';
import peonB from './fichas/peonB.png';
import peonN from './fichas/peonN.png';
import reinaB from './fichas/reinaB.png';
import reinaN from './fichas/reinaN.png';
import reyB from './fichas/reyB.png';
import reyN from './fichas/reyN.png';
import torreB from './fichas/torreB.png';
import torreN from './fichas/torreN.png';
import './ajedrez.scss';

const firstRowPieces: string[][] = [
  [torreN, torreB],
  [caballoN, caballoB],
  [alfilN, alfilB],
  [reinaN, reinaB],
  [reyN, reyB],
  [caballoN, caballoB],
  [alfilN, alfilB],
  [torreN, torreB],
];

const peons = [peonN, peonB];

init();

function generateBoard(): HTMLElement {
  const BOARD_SIZE = 8;
  const board = document.createElement('div');
  board.classList.add('board');

  for (let row = 0; row < BOARD_SIZE; row++) {
    const boardRow = document.createElement('div');
    boardRow.classList.add('board-row');
    for (let col = 0; col < BOARD_SIZE; col++) {
      const isWhiteSqure = (col + row) % 2 === 0;
      const tempSquare = generateSquare(isWhiteSqure ? 'white' : 'gray');
      switch (row) {
        case 0:
          tempSquare.appendChild(generatePeice(firstRowPieces[col][0]));
          break;
        case 1:
          tempSquare.appendChild(generatePeice(peons[0]));
          break;
        case BOARD_SIZE - 2:
          tempSquare.appendChild(generatePeice(peons[1]));
          break;
        case BOARD_SIZE - 1:
          tempSquare.appendChild(generatePeice(firstRowPieces[col][1]));
          break;
      }

      boardRow.appendChild(tempSquare);
    }
    board.appendChild(boardRow);
  }

  return board;
}

function generateSquare(color: 'gray' | 'white'): HTMLElement {
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.backgroundColor = color;

  return square;
}

function generatePeice(src: string): HTMLImageElement {
  const img = document.createElement('img');
  img.src = src;

  return img;
}

function init() {
  document.body.appendChild(generateBoard());
}
