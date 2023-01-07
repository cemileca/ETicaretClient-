import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUiComponent } from './products-ui.component';

describe('ProductsUiComponent', () => {
  let component: ProductsUiComponent;
  let fixture: ComponentFixture<ProductsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
