import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  capitais: string[];
  mostrar : boolean = false;

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.capitais = [
      'Porto Velho',	  
      'Manaus	       ', 
      'Rio Branco	   ', 
      'Campo Grande	',
      'Macapá	       ', 
      'Brasília		',
      'Boa Vista		',
      'Cuiabá			',
      'Palmas			',
      'Teresina		',
      'São Paulo		',
      'Rio de Janeiro',
      'Belém			',
      'São Luís		',
      'Goiânia		',
      'Salvador		',
      'Maceió			',
      'Porto Alegre	',
      'Curitiba		',
      'Florianópolis	',
      'Florianopolis	',
      'Belo Horizonte',
      'Fortaleza		',
      'Recife			',
      'João Pessoa	',
      'Joao Pessoa	',
      'Aracaju		',
      'Natal			',
      'Vitória       '  
    ];
  }

  getCapitais(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    this.mostrar = false;
   
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.capitais = this.capitais.filter((item) => {
        this.mostrar = this.capitais.length > 0 ? true : false;
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  removerAcentos( newStringComAcento : string ) {
    let retorno = newStringComAcento;
    let mapaAcentosHex 	= {
      a : /[\xE0-\xE6]/g,
      A : /[\xC0-\xC6]/g,
      e : /[\xE8-\xEB]/g,
      E : /[\xC8-\xCB]/g,
      i : /[\xEC-\xEF]/g,
      I : /[\xCC-\xCF]/g,
      o : /[\xF2-\xF6]/g,
      O : /[\xD2-\xD6]/g,
      u : /[\xF9-\xFC]/g,
      U : /[\xD9-\xDC]/g,
      c : /\xE7/g,
      C : /\xC7/g,
      n : /\xF1/g,
      N : /\xD1/g
    };
  
    for ( let letra in mapaAcentosHex ) {
      let expressaoRegular = mapaAcentosHex[letra];
      retorno = retorno.replace( expressaoRegular, letra );
    }
  
    return retorno;
  }

}
