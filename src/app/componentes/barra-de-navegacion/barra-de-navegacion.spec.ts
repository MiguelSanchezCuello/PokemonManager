import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeNavegacion } from './barra-de-navegacion';

describe('BarraDeNavegacion', () => {
  let component: BarraDeNavegacion;
  let fixture: ComponentFixture<BarraDeNavegacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraDeNavegacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraDeNavegacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
