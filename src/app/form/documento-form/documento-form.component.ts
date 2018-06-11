import { Component, OnInit } from '@angular/core';
import { Documento } from '../../model/documento.model';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-documento-form',
  templateUrl: './documento-form.component.html',
  styleUrls: ['./documento-form.component.css']
})
export class DocumentoFormComponent implements OnInit {

  public documentos: Documento = new Documento('', '', '');

  public botao: boolean = true;

  public tipoDocumento: string = '';
  public nomeDocumento: string = '';
  public url: string = '';

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  habilitaBotao(): void {
    if(this.tipoDocumento != '' && this.nomeDocumento != '' && this.url != '') {
      this.botao = false;
    } else {
      this.botao = true;
    }
  }

  atualizarTipoDocumento(tipoDocumento: string): void {
    this.tipoDocumento = tipoDocumento;

    this.habilitaBotao();
  }


  atualizarNomeDocumento(nomeDocumento: string): void {
    this.nomeDocumento = nomeDocumento;

    this.habilitaBotao();
  }

  atualizarUrl(url: string): void {
    this.url = url;

    this.habilitaBotao();
  }

  salvar(): void {
    this.documentos.tipo_documento = this.tipoDocumento;
    this.documentos.nome_documento = this.nomeDocumento;
    this.documentos.url = this.url;

    this.botao = true;

    this.appService.salvarDocumento(this.documentos)
      .subscribe(
        (documento) => console.log(documento),
        (erro) => console.log(erro),
        () => console.log('OK')
      )
  }

}
