import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonesJrrComponent } from './digimones-jrr.component';

describe('DigimonesJrrComponent', () => {
  let component: DigimonesJrrComponent;
  let fixture: ComponentFixture<DigimonesJrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonesJrrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonesJrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
