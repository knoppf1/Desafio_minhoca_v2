import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio2ListaComponent } from './exercicio2-lista.component';

describe('Exercicio2ListaComponent', () => {
  let component: Exercicio2ListaComponent;
  let fixture: ComponentFixture<Exercicio2ListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicio2ListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercicio2ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
