import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleInput } from './title-input';

describe('TitleInput', () => {
  let component: TitleInput;
  let fixture: ComponentFixture<TitleInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleInput],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
