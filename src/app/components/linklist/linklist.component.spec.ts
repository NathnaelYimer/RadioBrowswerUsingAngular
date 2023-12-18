import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinklistComponent } from './linklist.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('LinklistComponent', () => {
  let component: LinklistComponent;
  let fixture: ComponentFixture<LinklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinklistComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
