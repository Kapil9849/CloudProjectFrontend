import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgedataComponent } from './agedata.component';

describe('AgedataComponent', () => {
  let component: AgedataComponent;
  let fixture: ComponentFixture<AgedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
