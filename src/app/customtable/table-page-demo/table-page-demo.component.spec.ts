import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePageDemoComponent } from './table-page-demo.component';

describe('TablePageDemoComponent', () => {
  let component: TablePageDemoComponent;
  let fixture: ComponentFixture<TablePageDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePageDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
