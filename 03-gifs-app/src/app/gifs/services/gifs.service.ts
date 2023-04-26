import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'}) // el root hace que el servicio este disponible en toda la app.
export class GifsService {

  public gifList: Gif[] = [];

  private _tagHistory: string[]=[]; //lo hago privado para que no haya una modificacion directa fuera del servicio.
  private apiKey:      string='ZgxdZP4wssdhla0ZE4XNxOXB0GsQOlYF';
  private serviceUrl:  string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient){
    this.loadLocalStorage();
    console.log('Gif Service Ready');

  }

  get tagsHistory(){    //uso el get para exponer lo que quiero.
    return [...this._tagHistory]; //operador ...
  }

  private organizeHistory(tag:string){ //metodo privado para organizar el historial.
    tag = tag.toLowerCase(); //lo pasamos todo a minuscula en el array.

    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter( (oldTag)=> oldTag !== tag)
    } //un array con todos los tags menos el que coincide.

    this._tagHistory.unshift(tag);
    this._tagHistory = this.tagsHistory.splice(0,10); //maximo muestra 10.
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this._tagHistory))
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')){return}//si no tenemos data.

    this._tagHistory = JSON.parse(localStorage.getItem('history')!);// el ! sirve para decir q puede ser nulo.

    if(this._tagHistory.length===0)return;
    this.searchTag(this._tagHistory[0]);
  }


  searchTag( tag :string):void{ //metodo.

    if (tag.length===0)return; //si no pasaron nada que no haga nada. VALIDACION
    this.organizeHistory(tag);

    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=ZgxdZP4wssdhla0ZE4XNxOXB0GsQOlYF&q=valorant&limit=10')
    // const data = await resp.json;
    // console.log(data); esto se hacia en javasprip

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','10')
      .set('q',tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})// el http es lo mismo que el fetch, pero se usa mas.
      .subscribe( resp=>{

        this.gifList=resp.data;

      })

  }

}
