import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgPickComponent } from './components/img-pick/img-pick.component';
import { ColorPickComponent } from './components/color-pick/color-pick.component';



@NgModule({
  declarations: [ColorPickComponent, ImgPickComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
