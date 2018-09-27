import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDisplayComponent } from './editor-display.component';

describe('EditorDisplayComponent', () => {
  let component: EditorDisplayComponent;
  let fixture: ComponentFixture<EditorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
