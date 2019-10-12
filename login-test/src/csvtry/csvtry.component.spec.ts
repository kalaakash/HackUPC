import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvtryComponent } from './csvtry.component';

describe('CsvtryComponent', () => {
  let component: CsvtryComponent;
  let fixture: ComponentFixture<CsvtryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvtryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
