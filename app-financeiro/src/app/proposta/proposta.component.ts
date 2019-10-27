import { Component, OnInit, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Proposta } from '../shared/proposta.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { URL_API } from '../app.api'
import { PropostaService } from '../proposta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.css']
})
export class PropostaComponent implements OnInit {
  public proposta: Proposta = new Proposta();
  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null, [Validators.required]),
    'descricao': new FormControl(null, [Validators.required]),
    'area': new FormControl(null),
    'status': new FormControl(null, Validators.required),
    'dataInicio': new FormControl(null, Validators.required),
    'dataTermino': new FormControl(null, Validators.required),
  });
  constructor(private propostaService: PropostaService,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe((parametros: any) => {
      this.propostaService.getPropostaPorId(parametros.id)
        .then((proposta: Proposta) => {
          this.proposta = proposta
        });
    })
  }
  ngOnDestroy() {
  }

  public salvarProposta(): void {
    console.log(this.formulario.value);
    console.log(this.formulario.status);

    if (this.formulario.status == "INVALID") {
      this.formulario.get('titulo').markAllAsTouched();
      this.formulario.get('descricao').markAllAsTouched();
      this.formulario.get('area').markAllAsTouched();
      this.formulario.get('status').markAllAsTouched();
      this.formulario.get('dataInicio').markAllAsTouched();
      this.formulario.get('dataTermino').markAllAsTouched();
    }
    else {

      let itemProposta: Proposta = new Proposta();
      itemProposta.titulo = this.formulario.value.titulo;
      itemProposta.descricao = this.formulario.value.descricao;
      itemProposta.area = this.formulario.value.area;
      itemProposta.status = this.formulario.value.status;
      itemProposta.dataInicio = this.formulario.value.dataInicio;
      itemProposta.dataTermino = this.formulario.value.dataTermino;

      console.log(itemProposta);
      this.propostaService.salvarItem(itemProposta)
        .subscribe((resposta) => {
          alert('salvo com sucesso!')
        });
    }
  }
}
