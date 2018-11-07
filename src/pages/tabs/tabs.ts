import { Component } from '@angular/core';

import { PrincipalPage, MensajePage, AnimalesPage } from '../index.paginas';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1 = PrincipalPage;
  tab2 = MensajePage;
  tab3 = AnimalesPage;

  constructor() {
    console.log(this.tab1);
  }
}
