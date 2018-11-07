import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pagina2Page } from "../index.paginas";


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {

  pagina2:any = Pagina2Page;

  personajes:any[] = [
    {
      img:"assets/img/han-solo.jpg",
      nombre:"Han Solo",
      titulo: "Cazarrecompensas"
    },
    {
      img:"assets/img/rey.jpg",
      nombre:"Rey",
      titulo: "Recolectora"
    },
    {
      img:"assets/img/finn.jpg",
      nombre:"Finn",
      titulo: "Piloto"
    },
    {
      img:"assets/img/leia.jpg",
      nombre:"Leia",
      titulo: "Princesa"
    }
  ];

  constructor(public navCtrl: NavController ) {}

 irPagina2( personaje:any ){

    console.log( personaje );
//llamada al metodo push (pagina,{ 'alias':objeto})
    this.navCtrl.push( Pagina2Page, { 'personaje': personaje  } );


 }

}