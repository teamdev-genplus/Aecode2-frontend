import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgProfileComponent } from './svg-profile.component';

describe('SvgProfileComponent', () => {
  let component: SvgProfileComponent;
  let fixture: ComponentFixture<SvgProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
