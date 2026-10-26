import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGrid } from './form-grid';

describe('FormGrid', () => {
  let component: FormGrid;
  let fixture: ComponentFixture<FormGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(FormGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
