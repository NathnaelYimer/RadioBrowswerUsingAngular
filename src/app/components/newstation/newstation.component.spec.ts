import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstationComponent } from './newstation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from '@angular/forms';

describe('NewstationComponent', () => {
  let component: NewstationComponent;
  let fixture: ComponentFixture<NewstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewstationComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
