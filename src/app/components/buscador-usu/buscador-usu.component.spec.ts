import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorUsuComponent } from './buscador-usu.component';

describe('BuscadorUsuComponent', () => {
  let component: BuscadorUsuComponent;
  let fixture: ComponentFixture<BuscadorUsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorUsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
