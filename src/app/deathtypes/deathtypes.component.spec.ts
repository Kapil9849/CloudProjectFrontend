import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathtypesComponent } from './deathtypes.component';

describe('DeathtypesComponent', () => {
  let component: DeathtypesComponent;
  let fixture: ComponentFixture<DeathtypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathtypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
