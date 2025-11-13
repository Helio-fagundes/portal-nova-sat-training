import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardComponentComponent } from './create-card-component.component';

describe('CreateCardComponentComponent', () => {
  let component: CreateCardComponentComponent;
  let fixture: ComponentFixture<CreateCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
