import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBasketSummaryComponent } from './app-basket-summary.component';

describe('AppBasketSummaryComponent', () => {
  let component: AppBasketSummaryComponent;
  let fixture: ComponentFixture<AppBasketSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppBasketSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBasketSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
