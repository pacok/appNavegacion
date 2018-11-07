import { Component } from '@angular/core';
import { ANIMALES } from "../../data/data.animales";
import { Animal } from "../../interfaces/animal.interface";
import { Refresher,reorderArray }  from "ionic-angular";


/*
  Generated class for the AnimalesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-animales',
  templateUrl: 'animales.html'
})
export class AnimalesPage {
  animales:Animal[] = [];
  audio = new Audio();
  audioTiempo: any;
  ordenando:boolean = false;

  constructor() {

    this.animales = ANIMALES.slice(0);

  }

  reproducir( animal:Animal ){

    this.pausar_audio( animal );

    if( animal.reproduciendo ){
      animal.reproduciendo = false;
      return;
    }

    console.log( animal );

    this.audio.src = animal.audio;

    this.audio.load();
    this.audio.play();


    animal.reproduciendo = true;

    this.audioTiempo = setTimeout( ()=> animal.reproduciendo = false, animal.duracion * 1000  );


  }

  private pausar_audio( animalSel:Animal ){

    clearTimeout( this.audioTiempo );

    this.audio.pause();
    this.audio.currentTime = 0;


    for(  let animal of this.animales ){

      if( animal.nombre != animalSel.nombre ){
        animal.reproduciendo = false;
      }

    }


  }

  borrar_animal( idx:number ){

    this.animales.splice( idx, 1 );

  }

  recargar_animales( refresher:Refresher ){

    console.log("Inicio del refresh");

    setTimeout( ()=>{

          console.log("Termino el refresh");
          this.animales = ANIMALES.slice(0);
          refresher.complete();

    },1500)

  }

  reordenar_animales( indices:any ){

    console.log(indices);
    this.animales = reorderArray( this.animales, indices );

  }

}
 

