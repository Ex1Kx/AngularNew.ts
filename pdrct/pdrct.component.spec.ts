import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdrctComponent } from './pdrct.component';

describe('PdrctComponent', () => {
  let component: PdrctComponent;
  let fixture: ComponentFixture<PdrctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdrctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdrctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
