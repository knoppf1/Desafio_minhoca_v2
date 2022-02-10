import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio1ListaComponent } from './exercicio1-lista.component';

describe('Exercicio1ListaComponent', () => {
  let component: Exercicio1ListaComponent;
  let fixture: ComponentFixture<Exercicio1ListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicio1ListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercicio1ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
