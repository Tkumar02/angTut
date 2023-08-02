import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterWordComponent } from './enter-word.component';

describe('EnterWordComponent', () => {
  let component: EnterWordComponent;
  let fixture: ComponentFixture<EnterWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
