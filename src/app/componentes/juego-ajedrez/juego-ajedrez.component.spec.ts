import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoAjedrezComponent } from './juego-ajedrez.component';

describe('JuegoAjedrezComponent', () => {
  let component: JuegoAjedrezComponent;
  let fixture: ComponentFixture<JuegoAjedrezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoAjedrezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoAjedrezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
