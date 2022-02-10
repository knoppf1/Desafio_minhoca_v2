import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-exercicio2-lista',
  templateUrl: './exercicio2-lista.component.html',
  styleUrls: ['./exercicio2-lista.component.scss']
})
export class Exercicio2ListaComponent implements OnInit {

  title = 'Desafio-Minhoca';
  meio: boolean = false;
  fim: boolean = false;
  delta:number=0;
  i:number=0;
  frmFormLista!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  this.frmFormLista = this.fb.group({
    prof: [''],
    sobe: [''],
    desce: [''],
  })


  }



  // FUNÇAO EXERCÍCIO 2
  savelista($event: any){
     do {
      this.delta = this.frmFormLista.value.prof - ((this.frmFormLista.value.sobe-this.frmFormLista.value.desce)*this.i)
      console.log('Delta', this.delta)

        if(this.delta == ((this.frmFormLista.value.prof)/2)){
          this.meio=true;
        }
        else if (this.delta == 0){
          this.fim=true;
        };

      this.i++;
      // setTimeout(() => {this.i++}, 1000);

    } while(this.delta > 0)
  }

  // Reseta
  back() {
    this.fim=false;
    this.meio=false;
  }

}
