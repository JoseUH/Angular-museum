import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGalleryComponent } from './second-gallery.component';

describe('SecondGalleryComponent', () => {
  let component: SecondGalleryComponent;
  let fixture: ComponentFixture<SecondGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
