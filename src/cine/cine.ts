import './cine.scss';

interface State {
  seleccionadas: HTMLDivElement[];
  ocupadas: number[][];
  nobutacas: number[][];
}

type ButacaType = 'libre' | 'ocupada' | 'nobutaca' | 'seleccion';

const state: State = {
  seleccionadas: [],
  ocupadas: [
    [5, 4],
    [5, 5],
    [5, 6],
    [7, 2],
    [7, 3],
    [9, 7],
    [9, 8],
    [10, 5],
    [10, 6],
    [10, 7],
    [11, 7],
    [13, 8],
  ],
  nobutacas: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [3, 0],
    [0, 9],
    [1, 9],
    [2, 9],
    [3, 9],
    [4, 9],
    [5, 9],
    [6, 9],
    [7, 9],
    [8, 9],
    [9, 9],
    [10, 9],
    [11, 9],
    [12, 9],
    [13, 9],
    [14, 9],
    [0, 10],
    [1, 10],
    [2, 10],
    [3, 10],
    [4, 10],
    [5, 10],
    [6, 10],
    [7, 10],
    [8, 10],
    [9, 10],
    [10, 10],
    [11, 10],
    [12, 10],
    [13, 10],
    [14, 10],
  ],
};

initializeSala(14, 11);

function initializeSala(maxRows: number, maxCols: number): void {
  const sala = document.querySelector('#sala');
  sala.innerHTML = null;
  sala.addEventListener('click', handleUserSelection);
  document.querySelector('#reservar').addEventListener('click', handleReserva);

  for (let row = 0; row <= maxRows; row++) {
    for (let col = 0; col <= maxCols; col++) {
      let type: ButacaType = 'libre';
      if (isOfType('ocupada', row, col)) {
        type = 'ocupada';
      } else if (isOfType('nobutaca', row, col)) {
        type = 'nobutaca';
      }
      sala.appendChild(butaca(type, row, col));
    }
  }
}

function butaca(type: ButacaType, row: number, col: number): HTMLDivElement {
  const butaca = document.createElement('div');
  butaca.textContent = `${row}, ${col}`;
  butaca.id = `b${row}-${col}`;
  changeButacaType(butaca, type);

  return butaca;
}

function isOfType(type: ButacaType, row: number, col: number) {
  let ifOfType = false;
  let ofTypeArr: number[][] = [];
  if (type === 'ocupada') {
    ofTypeArr = state.ocupadas;
  } else {
    ofTypeArr = state.nobutacas;
  }
  ofTypeArr.forEach(butacaPos => {
    if (butacaPos[0] === row && butacaPos[1] === col) {
      ifOfType = true;
    }
  });

  return ifOfType;
}

function changeButacaType(butaca: HTMLDivElement, type: ButacaType) {
  butaca.className = `butaca ${type}`;
}

function typeOfButaca(butaca: HTMLDivElement) {
  const type = <ButacaType>butaca.className.split(' ')[1];

  return type;
}

function handleUserSelection(e: Event) {
  if (e.target instanceof HTMLDivElement) {
    if (typeOfButaca(e.target) === 'libre') {
      changeButacaType(e.target, 'seleccion');
      state.seleccionadas.push(e.target);
    }
  }
}

function handleReserva(e: Event) {
  let reservaTextArea = <HTMLTextAreaElement>(
    document.querySelector('#reservas')
  );
  state.seleccionadas.forEach(butaca => {
    butaca.className = 'butaca ocupada';
    let id = butaca.id;
    id = id.slice(1);
    reservaTextArea.value += `butaca ${id.split('').join('')};\n`;
  });
}
