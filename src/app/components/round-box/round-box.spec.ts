import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoundBox } from './round-box';

describe('RoundBox', () => {
  let component: RoundBox;
  let fixture: ComponentFixture<RoundBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundBox],
    }).compileComponents();

    fixture = TestBed.createComponent(RoundBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
