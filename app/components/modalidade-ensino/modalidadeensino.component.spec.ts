import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeensinoComponent } from './modalidadeensino.component';

describe('ModalidadeensinoComponent', () => {
  let component: ModalidadeensinoComponent;
  let fixture: ComponentFixture<ModalidadeensinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadeensinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalidadeensinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
