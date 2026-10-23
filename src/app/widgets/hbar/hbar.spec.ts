import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HBar } from './hbar';

describe('HBar', () => {
  let component: HBar;
  let fixture: ComponentFixture<HBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HBar],
    }).compileComponents();

    fixture = TestBed.createComponent(HBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
