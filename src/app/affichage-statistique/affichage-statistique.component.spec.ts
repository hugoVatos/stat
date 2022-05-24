import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageStatistiqueComponent } from './affichage-statistique.component';

describe('AffichageStatistiqueComponent', () => {
  let component: AffichageStatistiqueComponent;
  let fixture: ComponentFixture<AffichageStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageStatistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
