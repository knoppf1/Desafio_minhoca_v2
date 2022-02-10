import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercicio1-lista',
  templateUrl: './exercicio1-lista.component.html',
  styleUrls: ['./exercicio1-lista.component.scss']
})
export class Exercicio1ListaComponent implements OnInit {


  title = 'Desafio-Minhoca';
  meio: boolean = false;
  fim: boolean = false;
  prof:number = 20;
  sobe:number= 5;
  desce:number=3;
  delta:number=20;
  i:number=0;
  frmFormLista!: FormGroup;

  constructor(

    // private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    // this.frmFormLista = this.createForm();
  }

  // Cria formulário para exercício 2
  // createForm(): FormGroup {
  //   return this.fb.group({
  //   prof: [],
  //   sobe: [],
  //   desce: [],
  //   });
  // }

  start() {
    do {
      this.delta = this.prof - ((this.sobe-this.desce)*this.i)
      console.log('Delta', this.delta)

        if(this.delta == ((this.prof)/2)){
          this.meio=true;
        }
        else if (this.delta == 0){
          this.fim=true;
        };

      this.i++;
      // Delay 1s
      // setTimeout(() => {this.i++}, 1000);

    } while(this.delta > 0)

  };
 // Reseta
  back() {
    this.fim=false;
    this.meio=false;
  }



};


