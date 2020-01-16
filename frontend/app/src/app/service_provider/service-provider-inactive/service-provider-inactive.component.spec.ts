import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderInactiveComponent } from './service-provider-inactive.component';

describe('ServiceProviderInactiveComponent', () => {
  let component: ServiceProviderInactiveComponent;
  let fixture: ComponentFixture<ServiceProviderInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
