import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlydeathsComponent } from './yearlydeaths.component';

describe('YearlydeathsComponent', () => {
  let component: YearlydeathsComponent;
  let fixture: ComponentFixture<YearlydeathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlydeathsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlydeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
