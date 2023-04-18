import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent { //es una simple clase que exporto porq si la quiero usar en otro lado

  public title: string = 'Hola Mundo';

}
