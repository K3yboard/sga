import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Contrato } from '../../model/contrato.model';

@Component({
  selector: 'app-contrato-form',
  templateUrl: './contrato-form.component.html',
  styleUrls: ['./contrato-form.component.css']
})
export class ContratoFormComponent {

  constructor(private appService: AppService) {}

  public contrato: Contrato = new Contrato('', '');

  public dataContrato: string;
  public dataVencimento: string;

  public botao: boolean = true;

  atualizarDataContrato(data: string): void {
    this.dataContrato = data;
    this.habilitaBotao();
  }

  atualizarDataVencimento(data: string): void {
    this.dataVencimento = data;
    this.habilitaBotao();
  }

  habilitaBotao(): void {
    if(this.dataContrato != '' && this.dataVencimento != '') {
      this.botao = false;
    } else {
      this.botao = true;
    }
  }

  salvar(): void {
    this.contrato.data_contrato = this.dataContrato;
    this.contrato.data_vencimento_contrato = this.dataVencimento;
    this.appService.salvarContrato(this.contrato)
      .subscribe(
        (contrato) => console.log(contrato),
        (erro) => console.log(erro),
        () => console.log('Ok')
      );
  }
}
