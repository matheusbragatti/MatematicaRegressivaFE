import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaCardComponent } from './aula-card.component';

describe('AulaCardComponent', () => {
  let component: AulaCardComponent;
  let fixture: ComponentFixture<AulaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
