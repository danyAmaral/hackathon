import { Component, OnInit, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Proposta } from '../shared/proposta.model';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { URL_API } from '../app.api'
import { PropostaService } from '../proposta.service';
import { DadosFinanceiros } from '../shared/dados-financeiros.model';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.css']
})
export class PropostaComponent implements OnInit {
  public formulario: FormGroup;
  public idProposta:number;
  public status:string = "Rascunho";
  constructor(private propostaService: PropostaService,
              private route: ActivatedRoute, 
              private router:Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.route.params.subscribe((parametros: any) => {
      if (parametros.id) {
        this.propostaService.getPropostaPorId(parametros.id)
          .then((proposta: Proposta) => {
            this.idProposta = proposta.id;
            console.log(this.idProposta)
            this.formulario = new FormGroup({
              'titulo': new FormControl(proposta.titulo, [Validators.required]),
              'descricao': new FormControl(proposta.descricao, [Validators.required]),
              'area': new FormControl(proposta.area, [Validators.required]),
              'status': new FormControl(proposta.status, Validators.required),
              'dataInicio': new FormControl(proposta.dataInicio, Validators.required),
              'dataTermino': new FormControl(proposta.dataTermino, Validators.required),
              'dadosFinanceiros': this.formBuilder.array([])
            });
            for(let i = 0; i <proposta.dadosFinanceiros.length; i++)
            {
              const elemento = proposta.dadosFinanceiros[i];
              this.addDadosFinanceirosFormGroup(elemento);
            }
            this.status = proposta.status
          });
       
      }
      else {
        this.formulario = new FormGroup({
          'titulo': new FormControl(null, [Validators.required]),
          'descricao': new FormControl(null, [Validators.required]),
          'area': new FormControl(null, [Validators.required]),
          'status': new FormControl('Rascunho', Validators.required),
          'dataInicio': new FormControl(new Date(), Validators.required),
          'dataTermino': new FormControl(new Date(), Validators.required),
          'dadosFinanceiros': this.formBuilder.array([])
        });
        this.addDadosFinanceirosFormGroup();
      }
    });

  }

  addDadosFinanceirosFormGroup(item?: DadosFinanceiros): void {
       (<FormArray>this.formulario.get('dadosFinanceiros')).push(this.formBuilder.group({
         ano: item ? item.ano : 0,
         janeiro: item ? item.janeiro : 0,
         fevereiro: item ? item.fevereiro : 0,
         marco: item ? item.marco : 0,
         abril: item ? item.abril : 0,
         maio: item ? item.maio : 0,
         junho: item ? item.junho : 0,
         julho: item ? item.julho : 0,
         agosto: item ? item.agosto : 0,
         setembro: item ? item.setembro : 0,
         outubro: item ? item.outubro : 0,
         novembro: item ? item.novembro : 0,
         dezembro: item ? item.dezembro : 0,
       }))
  }

  public getFormArrayControls() {
    return (<FormArray>this.formulario.get('dadosFinanceiros')).controls;
  }

  public addNovaLinha()
  {
      this.addDadosFinanceirosFormGroup();
  }
  ngOnDestroy() {
  }

  public salvarProposta(): void {
     if (this.formulario.status == "INVALID") {
      this.formulario.get('titulo').markAllAsTouched();
      this.formulario.get('descricao').markAllAsTouched();
      this.formulario.get('area').markAllAsTouched();
      this.formulario.get('status').markAllAsTouched();
      this.formulario.get('dataInicio').markAllAsTouched();
      this.formulario.get('dataTermino').markAllAsTouched();
    }
    else {
      let itemProposta = this.recuperarDadosFormnulario();
      if(this.idProposta)
      {
        this.atualizar(itemProposta)
      }
      else
      {
        this.incluir(itemProposta);
      }
    }
  }
  
  public recuperarDadosFormnulario(): Proposta{
    let itemProposta: Proposta = new Proposta();
    itemProposta.titulo = this.formulario.value.titulo;
    itemProposta.descricao = this.formulario.value.descricao;
    itemProposta.area = this.formulario.value.area;
    itemProposta.status = this.formulario.value.status;
    itemProposta.dataInicio = this.formulario.value.dataInicio;
    itemProposta.dataTermino = this.formulario.value.dataTermino;
    let itensConvertidos = new Array<DadosFinanceiros>();
    for(let i =0; i < this.formulario.value.dadosFinanceiros.length; i++)
    {
      let elemento = this.formulario.value.dadosFinanceiros[i];
      let item = new DadosFinanceiros();
      item.ano = <number>elemento.ano;
      item.janeiro = <number>elemento.janeiro;
      item.fevereiro = <number>elemento.fevereiro;
      item.marco = <number>elemento.marco;
      item.abril = <number>elemento.abril;
      item.maio = <number>elemento.maio;
      item.junho = <number>elemento.junho;
      item.julho = <number>elemento.julho;
      item.agosto = <number>elemento.agosto;
      item.setembro = <number>elemento.setembro;
      item.outubro = <number>elemento.outubro;
      item.novembro = <number>elemento.novembro;
      item.dezembro = <number>elemento.dezembro;
      itensConvertidos.push(item);
    }

    itemProposta.dadosFinanceiros = itensConvertidos;
  
    return itemProposta;
  }
  public atualizar(itemProposta:Proposta): void{
    itemProposta.id = this.idProposta;
    this.propostaService.atualizarItem(itemProposta)
    .subscribe((resposta) => {
      alert('salvo com sucesso!')
    });
  }

  public enviar(){
    let itemProposta = this.recuperarDadosFormnulario();
    itemProposta = this.alterarStatus("Aguardando Aprovação", itemProposta);
    this.atualizar(itemProposta);
  }

  public aprovar(){
    let itemProposta = this.recuperarDadosFormnulario();
    itemProposta = this.alterarStatus("Aprovada", itemProposta);
    this.atualizar(itemProposta);
  }

  public reprovar(){
    let itemProposta = this.recuperarDadosFormnulario();
    itemProposta = this.alterarStatus("Reprovada", itemProposta);
    this.atualizar(itemProposta);
  }

  public alterarStatus(status: string, itemProposta:Proposta): Proposta{
    itemProposta.status = status;
    this.formulario.get('status').setValue(status)
    this.status = status;

    return itemProposta;
  }

  public incluir(itemProposta:Proposta): void{
    this.propostaService.salvarItem(itemProposta)
    .subscribe((resposta) => {
      alert('salvo com sucesso!');
      this.idProposta = resposta.id;
      this.router.navigate([`/proposta/${this.idProposta}`])
    });
  }
}
