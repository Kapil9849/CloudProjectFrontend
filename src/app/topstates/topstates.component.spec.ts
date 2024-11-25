import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopstatesComponent } from './topstates.component';

describe('TopstatesComponent', () => {
  let component: TopstatesComponent;
  let fixture: ComponentFixture<TopstatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopstatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
