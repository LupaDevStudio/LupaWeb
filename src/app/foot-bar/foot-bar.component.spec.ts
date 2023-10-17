import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootBarComponent } from './foot-bar.component';

describe('FootBarComponent', () => {
  let component: FootBarComponent;
  let fixture: ComponentFixture<FootBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
