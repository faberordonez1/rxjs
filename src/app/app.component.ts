import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rxjs';

  constructor() {}

  public ngOnInit(): void {
    /**
     * El observable esta compuesto por 2 partes, primero el ciclo creado (matriz) y luego viene el ciclo de la suscripcion (recorre esa matriz)  
     * 
     * next => Procesa todos los datos
     * error => Salta cuando se cumple condicion de error y ahi termina el ciclo
     * complete => Indica que todos los next se ejecutaron correctamente
     */

      //ciclo
    const myObservable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next('Hola Mundo');
     //observer.error('Error N 1'); /*debe ir dentro de condicional de error*/
      observer.complete();
    });
      //recorrrido del ciclo (suscripcion)
    const subs = myObservable.subscribe({
      next: (x) => console.log('El siguiente valor es ' + x),
      error: (err) => console.log('Error: ' + err),
      complete: () => console.log('Suscripcion completada'),
    });

    subs.unsubscribe();
  }
}
