'use strict';

let field = [];
function GO() {
  
}
function numberBomb(array) {
  if (Array.isArray(array)) {
    let bc=0;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j]>0) {
          bc++;
        }
        
      }
      
    }
    return bc;
  }
  else {
    return 'error';
  }
    
}

// Función para crear la tabla con un array de arrays
function crearTabla(array) {
  // Obtén la referencia al elemento donde colocarás la tabla
  var contenedorTabla = document.body;

  // Crea la tabla y el cuerpo
  var tabla = document.createElement('table');
  var tbody = document.createElement('tbody');

  // Itera sobre el array y agrega filas y celdas
  array.forEach(function (filaDatos) {
      var fila = tbody.insertRow();

      filaDatos.forEach(function (dato) {
          var celda = fila.insertCell();
          celda.textContent = dato;
      });
  });

  // Agrega el cuerpo a la tabla
  tabla.appendChild(tbody);

  // Agrega la tabla al contenedor
  contenedorTabla.appendChild(tabla);
}

function easy() {
  for (let i = 0; i < 6; i++) {
    const b =12;
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    for (let j = 0; j < 6; j++) {
      const rand =getRandomInt(6);
      if (rand=6) {
        field[i][j]=1;
      }
      else {
        field[i][j]=0;
      }
      
    }
    if (numberBomb(field)>=b) {
      break;
    }
    
  }
}

function game() {
  
  
  crearTabla(field);
  let square=$field;
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  square.addEventListener('clic', (square) => {
    if (square>0) {
      GO();
    }
    else {
      
    }
  });
}
easy();
game();