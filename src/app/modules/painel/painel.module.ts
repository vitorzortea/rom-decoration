import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';
import { MenuComponent } from './menu/menu.component';
import { QuartoComponent } from './quarto/quarto.component';

import { ColorPickComponent } from './../../shared/components/color-pick/color-pick.component';
import { ImgPickComponent } from './../../shared/components/img-pick/img-pick.component';
import { EstruturaComponent } from './estrutura/estrutura.component';
import { MoveisComponent } from './moveis/moveis.component';


@NgModule({
  declarations: [PainelComponent, MenuComponent, QuartoComponent, ColorPickComponent, ImgPickComponent, EstruturaComponent, MoveisComponent],
  imports: [
    CommonModule,
    PainelRoutingModule
  ]
})
export class PainelModule { }
