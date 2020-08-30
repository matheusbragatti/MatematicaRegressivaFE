import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaCardComponent } from './materia-card.component';

describe('MateriaCardComponent', () => {
  let component: MateriaCardComponent;
  let fixture: ComponentFixture<MateriaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
