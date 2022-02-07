# Ejemplos de RXJS  
Cada operador se explica en una Rama diferente

[Link video YT ▶️](https://www.youtube.com/watch?v=U-afOIMLHKQ)

## Ciclo Observable (next,complete,error)

 El observable esta compuesto por 2 partes, primero el ciclo creado (matriz) y luego viene el ciclo de la suscripcion (recorre esa matriz)  

 El flujo se puede ver consola...

    next => Procesa todos los datos  
    error => Salta cuando se cumple condicion de error y ahi termina el ciclo  
    complete => Indica que todos los next se ejecutaron correctamente

~~~
  public ngOnInit(): void {

    //1. Ciclo
    const myObservable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next('Hola Mundo');
      //observer.error('Error N 1'); /*debe ir dentro de condicional de error*/
      observer.complete();
    });

    //2. recorrrido del ciclo
     const subs = myObservable.subscribe({
      next: (x) => console.log('El siguiente valor es ' + x),
      error: (err) => console.log('Error: ' + err),
      complete: () => console.log('Suscripcion completada'),
    });

    subs.unsubscribe();
  }
~~~

# Flujo

  Inicia el flujo en consola

~~~
El siguiente valor es 1
El siguiente valor es 2
El siguiente valor es Hola Mundo
Suscripción completada
~~~
