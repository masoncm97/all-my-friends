import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConextComponent } from './conext.component';

describe('ConextComponent', () => {
  let component: ConextComponent;
  let fixture: ComponentFixture<ConextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
