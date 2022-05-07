import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTwoNgcontentComponent } from './part-two-ngcontent.component';

describe('PartTwoNgcontentComponent', () => {
  let component: PartTwoNgcontentComponent;
  let fixture: ComponentFixture<PartTwoNgcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartTwoNgcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTwoNgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
