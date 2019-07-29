import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnosComponent } from './anos.component';

describe('AnosComponent', () => {
  let component: AnosComponent;
  let fixture: ComponentFixture<AnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
