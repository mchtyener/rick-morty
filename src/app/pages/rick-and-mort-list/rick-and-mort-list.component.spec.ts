import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortListComponent } from './rick-and-mort-list.component';

describe('RickAndMortListComponent', () => {
  let component: RickAndMortListComponent;
  let fixture: ComponentFixture<RickAndMortListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickAndMortListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RickAndMortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
