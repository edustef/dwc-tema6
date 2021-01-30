import './rejilla.scss';

type ColorPalete =
  | 'red'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'orange'
  | 'pink'
  | 'black'
  | 'white'
  | 'lightgray'
  | 'gray'
  | 'fuchsia'
  | 'coral'
  | 'navy'
  | 'brown'
  | 'cyan'
  | 'orchid';

interface State {
  colorActual: ColorPalete;
  colores: ColorPalete[];
}

const state: State = {
  colorActual: 'black',
  colores: [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'pink',
    'black',
    'white',
    'lightgray',
    'gray',
    'fuchsia',
    'coral',
    'navy',
    'brown',
    'cyan',
    'orchid',
  ],
};

document.addEventListener('DOMContentLoaded', () => {
  initPaletaColor(state.colores);
  handleGridChange();
});

document.querySelector('#boton').addEventListener('click', handleGridChange);

function pintarPunto(punto: HTMLElement) {
  punto.style.background = state.colorActual;
}

function handleGridChange() {
  const filas = parseInt(
    (<HTMLInputElement>document.querySelector('#filas')).value
  );
  const columnas = parseInt(
    (<HTMLInputElement>document.querySelector('#columnas')).value
  );
  const tamano = parseInt(
    (<HTMLInputElement>document.querySelector('#tampunto')).value
  );
  const isGridHidden = (<HTMLInputElement>document.querySelector('#checkbox'))
    .checked;

  console.log(isGridHidden);

  crearRejilla(filas, columnas, tamano, isGridHidden);
}

function initPaletaColor(colores: ColorPalete[]) {
  const paleta = document.getElementById('paleta');
  for (let i = 0; i < colores.length; i++) {
    const color = <HTMLElement>document.createElement('div');
    color.className = 'color ' + colores[i];
    color.style.backgroundColor = colores[i];
    color.addEventListener('click', e => {
      const el = <HTMLElement>e.currentTarget;
      state.colorActual = <ColorPalete>el.style.backgroundColor;
    });

    paleta.appendChild(color);
  }
}

function crearRejilla(
  fil: number,
  col: number,
  tampunto: number,
  isGridHidden: boolean
) {
  var rejilla = document.getElementById('rejilla');
  rejilla.innerHTML = '';
  rejilla.style.width = fil * tampunto + fil * 2 + 'px';

  for (let i = 0; i < fil; i++) {
    for (let j = 0; j < col; j++) {
      const pixel = document.createElement('div');
      const idPunto = i + 'x' + j;
      pixel.setAttribute('id', idPunto);
      pixel.style.width = tampunto + 'px';
      pixel.style.height = tampunto + 'px';
      pixel.className = 'punto';
      if (isGridHidden) {
        pixel.style.border = 'none';
      }
      pixel.addEventListener('click', e => {
        let el = <HTMLElement>e.currentTarget;
        pintarPunto(el);
      });
      rejilla.appendChild(pixel);
    }
  }
}
