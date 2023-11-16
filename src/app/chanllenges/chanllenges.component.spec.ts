import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanllengesComponent } from './chanllenges.component';

describe('ChanllengesComponent', () => {
  let component: ChanllengesComponent;
  let fixture: ComponentFixture<ChanllengesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChanllengesComponent]
    });
    fixture = TestBed.createComponent(ChanllengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
