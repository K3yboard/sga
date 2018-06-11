import { Component, OnInit } from '@angular/core';
import { Material } from '../../model/material.model'
import { AppService } from '../../app.service';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})

export class MaterialFormComponent implements OnInit {

  public material: Material = new Material('', '');
  public botao: boolean = true;

  public nome: string = '';
  public tipoMaterial: string = '';

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  habilitaBotao(): void {
    if(this.nome != '' && this.tipoMaterial) {
      this.botao = false;
    } else {
      this.botao = true;
    }
  }

  atualizarNomeMaterial(nome: string): void {
    this.nome = nome;

    this.habilitaBotao();
  }

  atualizarTipoMaterial(tipoMaterial: string): void {
    this.tipoMaterial = tipoMaterial;
    this.habilitaBotao();
  }

  salvarMaterial(material: Material[]): void {
    this.material.nome_material = this.nome;
    this.material.tipo_material = this.tipoMaterial;
    this.botao = true;

    this.appService.salvarMaterial(this.material)
      .subscribe(
        (material) => console.log(material),
        (erro) => console.log(erro),
        () => console.log('OK')
      );
  }
}
