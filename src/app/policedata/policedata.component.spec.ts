import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicedataComponent } from './policedata.component';

describe('PolicedataComponent', () => {
  let component: PolicedataComponent;
  let fixture: ComponentFixture<PolicedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
