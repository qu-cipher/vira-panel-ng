import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanInfo } from './plan-info';

describe('PlanInfo', () => {
  let component: PlanInfo;
  let fixture: ComponentFixture<PlanInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
