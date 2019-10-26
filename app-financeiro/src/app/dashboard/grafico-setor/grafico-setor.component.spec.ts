import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoSetorComponent } from './grafico-setor.component';

describe('GraficoSetorComponent', () => {
  let component: GraficoSetorComponent;
  let fixture: ComponentFixture<GraficoSetorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoSetorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
