import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

import { Empresa } from '../../model/empresa.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {

  public empresa: Empresa = new Empresa('', '', '', '');
  public botao: boolean = true;

  public nome: string = '';
  public cnpj: string = '';
  public inscricao: string = '';
  public licensa: string = '';

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  habilitaBotao(): void {
    if(this.nome != '' && this.cnpj != '' && this.inscricao != '' &&  this.licensa != '') {
      this.botao = false;
    } else {
      this.botao = true;
    }
  }

  atualizarNomeEmpresa(nome: string): void {
    this.nome = nome;

    this.habilitaBotao();
  }

  atualizarCNPJ(cnpj: string): void {
    this.cnpj = cnpj;
    this.habilitaBotao();
  }

  atualizarInscricao(inscricao: string): void {
    this.inscricao = inscricao;
    this.habilitaBotao();
  }

  atualizarLicensa(licensa: string): void {
    this.licensa = licensa;
    this.habilitaBotao();
  }

  adicionarEmpresa(empresa: Empresa[]): void {
    this.empresa.nome_empresa = this.nome;
    this.empresa.cnpj_empresa = this.cnpj;
    this.empresa.inscricao_municipal = this.inscricao;
    this.empresa.licensa = this.licensa;

    let body = JSON.stringify(this.empresa);
    this.botao = true;

    this.appService.salvarEmpresa(this.empresa)
      .subscribe(
        (empresas) => console.log(empresas),
        (erro) => console.log(erro),
        () => console.log('OK')
      );
  }
}
