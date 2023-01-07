import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketsUiComponent } from './baskets-ui.component';

describe('BasketsUiComponent', () => {
  let component: BasketsUiComponent;
  let fixture: ComponentFixture<BasketsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketsUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
