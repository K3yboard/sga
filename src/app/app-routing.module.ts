import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DescartesComponent } from './descartes/descartes.component';
import { MateriaisDescartadosComponent } from './materiais-descartados/materiais-descartados.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { FormComponent } from './form/form.component';
import { EmpresaFormComponent } from './form/empresa-form/empresa-form.component';
import { MaterialFormComponent } from './form/material-form/material-form.component';
import { RiscoBiologicoFormComponent } from './form/risco-biologico-form/risco-biologico-form.component';
import { DocumentoFormComponent } from './form/documento-form/documento-form.component';
import { ContratoFormComponent } from './form/contrato-form/contrato-form.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'descartes', component: DescartesComponent },
  { path: 'materiais-descartados', component: MateriaisDescartadosComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'cadastro', component: FormComponent,
    children: [
      { path: 'empresa', component: EmpresaFormComponent },
      { path: 'material', component: MaterialFormComponent },
      { path: 'risco-biologico', component: RiscoBiologicoFormComponent },
      { path: 'documento', component: DocumentoFormComponent },
      { path: 'contrato', component: ContratoFormComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
