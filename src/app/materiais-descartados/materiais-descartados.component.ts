import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-materiais-descartados',
  templateUrl: './materiais-descartados.component.html',
  styleUrls: ['./materiais-descartados.component.css']
})
export class MateriaisDescartadosComponent implements OnInit {

  materiais: any[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.obterMateriais();
  }

  obterMateriais(): void {
    this.appService.getMateriais()
      .subscribe(
        (material) => {
          this.materiais = material;
          console.log(this.materiais);
        },
        (erro) => console.log(erro.status),
        () => console.log('Busca por materiais concluída')
      );
  }

}
