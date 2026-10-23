import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleSwitch } from './title-switch';

describe('TitleSwitch', () => {
  let component: TitleSwitch;
  let fixture: ComponentFixture<TitleSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleSwitch],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
