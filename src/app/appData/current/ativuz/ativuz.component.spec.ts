import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivuzComponent } from './ativuz.component';

describe('AtivuzComponent', () => {
  let component: AtivuzComponent;
  let fixture: ComponentFixture<AtivuzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivuzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
