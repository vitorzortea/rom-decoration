import { MoveisComponent } from './moveis/moveis.component';
import { EstruturaComponent } from './estrutura/estrutura.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelComponent } from './painel.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'estrutura',
  },
  {
    path: '',
    component: PainelComponent,
    children: [
      {
        path: 'estrutura',
        component: EstruturaComponent
      },
      {
        path: 'moveis',
        component: MoveisComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
