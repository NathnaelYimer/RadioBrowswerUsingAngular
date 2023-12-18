import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeclistComponent } from './codeclist.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('CodeclistComponent', () => {
  let component: CodeclistComponent;
  let fixture: ComponentFixture<CodeclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeclistComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
