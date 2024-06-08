import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationmapComponent } from './navigationmap.component';

describe('NavigationmapComponent', () => {
  let component: NavigationmapComponent;
  let fixture: ComponentFixture<NavigationmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
