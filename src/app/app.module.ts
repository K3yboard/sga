import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { MessagesComponent } from './messages/messages.component';
import { DescartesComponent } from './descartes/descartes.component';
import { MateriaisDescartadosComponent } from './materiais-descartados/materiais-descartados.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { FormComponent } from './form/form.component';
import { EmpresaFormComponent } from './form/empresa-form/empresa-form.component';
import { MaterialFormComponent } from './form/material-form/material-form.component';
import { RiscoBiologicoFormComponent } from './form/risco-biologico-form/risco-biologico-form.component';
import { DocumentoFormComponent } from './form/documento-form/documento-form.component';
import { ContratoFormComponent } from './form/contrato-form/contrato-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // MessagesComponent,
    DescartesComponent,
    MateriaisDescartadosComponent,
    EmpresasComponent,
    FormComponent,
    EmpresaFormComponent,
    MaterialFormComponent,
    RiscoBiologicoFormComponent,
    DocumentoFormComponent,
    ContratoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
