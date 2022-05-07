import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOneVlvComponent } from './part-one-vlv.component';

describe('PartOneVlvComponent', () => {
  let component: PartOneVlvComponent;
  let fixture: ComponentFixture<PartOneVlvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartOneVlvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOneVlvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
