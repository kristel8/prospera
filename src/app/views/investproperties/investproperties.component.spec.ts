import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestpropertiesComponent } from './investproperties.component';

describe('InvestpropertiesComponent', () => {
  let component: InvestpropertiesComponent;
  let fixture: ComponentFixture<InvestpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestpropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
