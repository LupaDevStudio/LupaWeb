import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPageDetailsComponent } from './news-page-details.component';

describe('NewsPageDetailsComponent', () => {
  let component: NewsPageDetailsComponent;
  let fixture: ComponentFixture<NewsPageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsPageDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
