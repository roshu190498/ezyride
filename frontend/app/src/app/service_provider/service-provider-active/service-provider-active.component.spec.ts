import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderActiveComponent } from './service-provider-active.component';

describe('ServiceProviderActiveComponent', () => {
  let component: ServiceProviderActiveComponent;
  let fixture: ComponentFixture<ServiceProviderActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
