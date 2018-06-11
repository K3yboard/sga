import { Component, OnInit } from '@angular/core';
import { RiscoBiologico } from '../../model/risco-biologico.model';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-risco-biologico-form',
  templateUrl: './risco-biologico-form.component.html',
  styleUrls: ['./risco-biologico-form.component.css']
})
export class RiscoBiologicoFormComponent implements OnInit {

  public riscoBiologico: RiscoBiologico = new RiscoBiologico('', '');
  public botao: boolean = true;

  public descricao: string = '';
  public grauContaminacao: string = '';

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  habilitaBotao(): void {
    if(this.descricao != '' && this.grauContaminacao != '') {
      this.botao = false;
    } else {
      this.botao = true;
    }
  }

  atualizarDescricaoRisco(descricao: string): void {
    this.descricao = descricao;

    this.habilitaBotao();
  }

  atualizarGrauContaminacao(grauContaminacao: string): void {
    this.grauContaminacao = grauContaminacao;
    this.habilitaBotao();
  }

  salvar(): void {
    this.riscoBiologico.descricao_risco = this.descricao;
    this.riscoBiologico.grau_contaminacao = this.grauContaminacao;
    this.botao = true;

    this.appService.salvarRiscoBiologico(this.riscoBiologico)
      .subscribe(
        (riscoBiologico) => console.log(riscoBiologico),
        (erro) => console.log(erro),
        () => console.log('OK')
      );
  }
}
