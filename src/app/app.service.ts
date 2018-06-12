import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// import { MessageService } from './message.service';
import { Empresa } from './model/empresa.model';
import { Material } from './model/material.model';
import { RiscoBiologico } from './model/risco-biologico.model';
import { Documento } from './model/documento.model';
import { Contrato } from './model/contrato.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private empresaUrl = '/empresa';
  private materialUrl = '/material';
  private riscoBiologicolUrl = '/risco-biologico';
  private relacaoDescarteUrl = '/relacao-descarte';
  private documentoUrl = '/documento';
  private contratoUrl = '/contrato';
  private header = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  };

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) {}

  public getEmpresas(): Observable<Empresa[]> {
    const httpOptions = new HttpHeaders(this.header);
    // this.messageService.add('AppService: obtendo empresas');

    return this.http.get<Empresa[]>(this.empresaUrl, { headers: httpOptions });
  }

  public getMateriais(): Observable<Material[]> {
    return this.http.get<Material[]>(this.materialUrl);
  }

  getDescartes(): any {
    return this.http.get<any>(this.relacaoDescarteUrl);
  }

  salvarEmpresa(empresa: Empresa): Observable<Empresa[]> {
    return this.http.post<Empresa[]>(this.empresaUrl, empresa);
  }

  salvarMaterial(material: Material): Observable<Material[]> {
    return this.http.post<Material[]>(this.materialUrl, material);
  }

  salvarRiscoBiologico(riscoBiologico: RiscoBiologico): Observable<RiscoBiologico[]> {
    return this.http.post<RiscoBiologico[]>(this.riscoBiologicolUrl, riscoBiologico);
  }

  salvarDocumento(documento: Documento): Observable<Documento[]> {
    return this.http.post<Documento[]>(this.documentoUrl, documento);
  }

  salvarContrato(contrato: Contrato): Observable<Contrato[]> {
    return this.http.post<Contrato[]>(this.contratoUrl, contrato);
  }

  private log(message: string) {
    // this.messageService.add('AppService: ' + message);
  }
}
