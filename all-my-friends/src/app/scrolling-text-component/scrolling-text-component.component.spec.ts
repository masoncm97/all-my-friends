import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingTextComponentComponent } from './scrolling-text-component.component';

describe('ScrollingTextComponentComponent', () => {
  let component: ScrollingTextComponentComponent;
  let fixture: ComponentFixture<ScrollingTextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingTextComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
