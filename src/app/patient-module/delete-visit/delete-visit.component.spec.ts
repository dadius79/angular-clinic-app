import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVisitComponent } from './delete-visit.component';

describe('DeleteVisitComponent', () => {
  let component: DeleteVisitComponent;
  let fixture: ComponentFixture<DeleteVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
