import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllResourcesComponent } from './view-all-resources.component';

describe('ViewAllResourcesComponent', () => {
  let component: ViewAllResourcesComponent;
  let fixture: ComponentFixture<ViewAllResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
