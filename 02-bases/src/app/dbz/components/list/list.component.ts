import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() //le digo que puede recibir una propiedad llamada characterList
  public characterList: Character[]=[{ // y lo que tiene dentro es el valor por defecto.
    name: 'Trunks',
    power:10
  }];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{

    if(!id) return;

    this.onDelete.emit(id);
  }

}
