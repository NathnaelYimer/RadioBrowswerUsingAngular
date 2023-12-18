import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrylistComponent } from './countrylist.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('CountrylistComponent', () => {
  let component: CountrylistComponent;
  let fixture: ComponentFixture<CountrylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrylistComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
