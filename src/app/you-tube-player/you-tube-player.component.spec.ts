import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouTubePlayerComponent } from './you-tube-player.component';

describe('YouTubePlayerComponent', () => {
  let component: YouTubePlayerComponent;
  let fixture: ComponentFixture<YouTubePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouTubePlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YouTubePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
