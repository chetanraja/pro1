import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongchainComponent } from './longchain.component';

describe('LongchainComponent', () => {
  let component: LongchainComponent;
  let fixture: ComponentFixture<LongchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
