import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingImageContainerComponent } from './rotating-image-container.component';

describe('RotatingImageContainerComponent', () => {
  let component: RotatingImageContainerComponent;
  let fixture: ComponentFixture<RotatingImageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotatingImageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
