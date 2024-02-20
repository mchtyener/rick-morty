import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortDetailComponent } from './rick-and-mort-detail.component';

describe('RickAndMortDetailComponent', () => {
  let component: RickAndMortDetailComponent;
  let fixture: ComponentFixture<RickAndMortDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickAndMortDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RickAndMortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
