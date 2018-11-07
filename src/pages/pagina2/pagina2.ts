import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  personaje:any = {};

  constructor( private navParams:NavParams ){

    console.log( navParams );

    this.personaje = this.navParams.get("personaje");

  }


}
