import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPickComponent } from './img-pick.component';

describe('ImgPickComponent', () => {
  let component: ImgPickComponent;
  let fixture: ComponentFixture<ImgPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
