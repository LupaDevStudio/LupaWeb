import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFunctionalityComponent } from './common-functionality.component';

describe('CommonFunctionnalityComponent', () => {
  let component: CommonFunctionalityComponent;
  let fixture: ComponentFixture<CommonFunctionalityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonFunctionalityComponent]
    });
    fixture = TestBed.createComponent(CommonFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
