import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlydeathsComponent } from './monthlydeaths.component';

describe('MonthlydeathsComponent', () => {
  let component: MonthlydeathsComponent;
  let fixture: ComponentFixture<MonthlydeathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlydeathsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlydeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
