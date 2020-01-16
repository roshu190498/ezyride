import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConsumerInactiveComponent } from './service-consumer-inactive.component';

describe('ServiceConsumerInactiveComponent', () => {
  let component: ServiceConsumerInactiveComponent;
  let fixture: ComponentFixture<ServiceConsumerInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceConsumerInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConsumerInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
