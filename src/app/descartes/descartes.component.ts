import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-descartes',
  templateUrl: './descartes.component.html',
  styleUrls: ['./descartes.component.css']
})
export class DescartesComponent implements OnInit {

  descartes: any[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.obterRelacaoDeDescartes();
  }

  obterRelacaoDeDescartes(): void {
    this.appService.getDescartes().
      subscribe(
        (descartes) => {
          this.descartes = descartes;
          console.log(this.descartes);
        },
        (erro) => console.log(erro.status),
        () => console.log('Busca por descartes concluída')
      );
  }

}
