import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoLinkComponent } from './mongo-link.component';

describe('MongoLinkComponent', () => {
  let component: MongoLinkComponent;
  let fixture: ComponentFixture<MongoLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
