import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculadora';
  name = 'Eloi Martorell';

  x = 0;
  y = 0;
  operacion = '';

  pantalla1 = '0';
  pantalla2 = '0';

  //pasamos como parametro un numero que es un Int, hay que declararlo como tal
  introducirNumero(numero: number) {
    //para borrar el 0 inicial
    if (this.pantalla1.charAt(0) == '0' && this.pantalla1.length == 1) {
      this.pantalla1 = '';
    }

    this.pantalla1 += numero.toString();
  }

  introducirCeros() {
    this.pantalla1 += '00';
  }

  borrar() {
    this.pantalla1 = '0';
    this.pantalla2 = '0';
  }

  coma() {
    //miramos si no hay ninguna coma
    for (let i = 0; i < this.pantalla1.length; i++) {
      if (this.pantalla1.charAt(i) == '.') {
        return alert('Ya hay coma!');
      }
    }
    this.pantalla1 += '.';
  }

  realizarOperacion(operacion: string) {
    //se guarda lo escrito en x
    this.x = parseFloat(this.pantalla1);
    //se guarda la operación seleccionada
    this.operacion = operacion;
    //se resetea la pantalla para introducir el valor y
    this.borrar();
  }

  calcular() {
    this.y = parseFloat(this.pantalla1);
    let resultado;

    switch (this.operacion) {
      case '+':
        //hacemos la operacion
        resultado = this.x + this.y;
        break;
      case '-':
        resultado = this.x - this.y;
        break;
      case '*':
        resultado = this.x * this.y;
        break;
      case '/':
        resultado = this.x / this.y;
        break;
      case '%':
        resultado = this.x % this.y;
        break;

      default:
        return alert('Error al calcular...');
        break;
    }

    this.pantalla2 = resultado.toString();
    this.pantalla1 = '0';

    this.x = 0;
    this.y = 0;
    this.operacion = '';
  }
}
