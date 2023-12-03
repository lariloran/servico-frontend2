import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaingressoComponent } from './formaingresso.component';

describe('FormaingressoComponent', () => {
  let component: FormaingressoComponent;
  let fixture: ComponentFixture<FormaingressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaingressoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormaingressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
