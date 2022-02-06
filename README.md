#Ejemplos de RXJS
Cada operador se explica en una Rama diferente

[Link video YT ▶️](https://www.youtube.com/watch?v=Vc87KRqvMJM)

## Ejemplo Simple switchMap

 fromEvent => Obs detecta click en el DOM
 SwitchMap => Interrumpe y reinicia el flujo del obs (interval) con cada click
 interval(1000) => contador que incrementa en 1 cada segundo 

~~~
  public ngOnInit():void {
    fromEvent(document, 'click')
      .pipe(switchMap(() => interval(1000)))
      .subscribe(console.log);
  }
~~~

# Flujo

## Click en el DOM
  Inicia el flujo en consola

~~~
0
1
2
3
n
~~~

## Click de nuevo
 Reinicia todo el flujo
~~~
0
1
2
3
n
~~~

