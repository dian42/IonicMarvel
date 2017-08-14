import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaracterPage } from './caracter';

@NgModule({
  declarations: [
    CaracterPage,
  ],
  imports: [
    IonicPageModule.forChild(CaracterPage),
  ],
})
export class CaracterPageModule {}
