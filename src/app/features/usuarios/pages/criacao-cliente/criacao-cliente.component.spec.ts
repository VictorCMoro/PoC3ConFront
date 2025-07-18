import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoClienteComponent } from './criacao-cliente.component';

describe('CriacaoClienteComponent', () => {
  let component: CriacaoClienteComponent;
  let fixture: ComponentFixture<CriacaoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriacaoClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
