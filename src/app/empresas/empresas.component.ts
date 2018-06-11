import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  empresas: any[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.obterEmpresas();
  }

  obterEmpresas(): void {
    this.appService.getEmpresas()
      .subscribe(
        (empresas) => {
          this.empresas = empresas;
          console.log(this.empresas)
        },
        (erro) => console.log(erro.status),
        () => console.log('Busca por empresas concluída')
      );
  }

}
