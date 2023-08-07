import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SutdentComponent } from './sutdent.component';

describe('SutdentComponent', () => {
  let component: SutdentComponent;
  let fixture: ComponentFixture<SutdentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SutdentComponent]
    });
    fixture = TestBed.createComponent(SutdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
