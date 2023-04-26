import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagImput
    />
  `,
})
export class SearchBoxComponent {

  @ViewChild('txtTagImput') //nos sirve para tomar UNA referencia local. //El ViewChildren es un array de todos los inputs
  tagInput!: ElementRef<HTMLInputElement>; //not null operator !

  constructor( private gifsService: GifsService) { } //inyectarlo en el constructor.

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';//para que se limpie

  }

}
