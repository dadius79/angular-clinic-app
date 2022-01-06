import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionmenuComponent } from './optionmenu.component';

describe('OptionmenuComponent', () => {
  let component: OptionmenuComponent;
  let fixture: ComponentFixture<OptionmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
