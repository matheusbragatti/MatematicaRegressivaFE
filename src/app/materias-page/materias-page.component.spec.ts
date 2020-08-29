import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasPageComponent } from './materias-page.component';

describe('MateriasPageComponent', () => {
  let component: MateriasPageComponent;
  let fixture: ComponentFixture<MateriasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
