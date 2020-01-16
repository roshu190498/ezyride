import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConsumerActiveComponent } from './service-consumer-active.component';

describe('ServiceConsumerActiveComponent', () => {
  let component: ServiceConsumerActiveComponent;
  let fixture: ComponentFixture<ServiceConsumerActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceConsumerActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConsumerActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
