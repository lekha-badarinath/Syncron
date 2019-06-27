import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrilldownTreeComponent } from './drilldown-tree.component';

describe('DrilldownTreeComponent', () => {
  let component: DrilldownTreeComponent;
  let fixture: ComponentFixture<DrilldownTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrilldownTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrilldownTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
