import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowselectionComponent } from './table-rowselection.component';

describe('TableRowselectionComponent', () => {
  let component: TableRowselectionComponent;
  let fixture: ComponentFixture<TableRowselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRowselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
