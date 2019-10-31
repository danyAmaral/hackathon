import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoLinhasComponent } from './grafico-linhas.component';

describe('GraficoLinhasComponent', () => {
  let component: GraficoLinhasComponent;
  let fixture: ComponentFixture<GraficoLinhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoLinhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoLinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
