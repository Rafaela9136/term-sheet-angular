import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDealModalComponent } from './edit-deal-modal.component';

describe('EditDealModalComponent', () => {
  let component: EditDealModalComponent;
  let fixture: ComponentFixture<EditDealModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDealModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDealModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
