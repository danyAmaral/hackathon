import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoCrescimentoComponent } from './grafico-crescimento.component';

describe('GraficoCrescimentoComponent', () => {
  let component: GraficoCrescimentoComponent;
  let fixture: ComponentFixture<GraficoCrescimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoCrescimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoCrescimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
