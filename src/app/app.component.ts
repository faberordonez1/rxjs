import { Component, OnInit } from '@angular/core';
import { switchMap, interval, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'rxjs';

  constructor() {}

  public ngOnInit():void {
    /**
     * fromEvent => Obs detecta click
     * SwitchMap => Interrumpe el flujo del obs (interval) con cada click
     * interval(1000) => contador que incrementa en 1 cada segundo 
     */
    
    fromEvent(document, 'click')
      .pipe(switchMap(() => interval(1000)))
      .subscribe(console.log);
  }

}
