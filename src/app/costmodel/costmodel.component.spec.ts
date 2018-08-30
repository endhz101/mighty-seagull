import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostmodelComponent } from './costmodel.component';

describe('CostmodelComponent', () => {
  let component: CostmodelComponent;
  let fixture: ComponentFixture<CostmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
