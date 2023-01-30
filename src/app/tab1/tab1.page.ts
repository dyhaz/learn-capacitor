import { AfterViewInit, Component } from '@angular/core';
import { CapacitorGallery } from 'galeri';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {
  private gallery = CapacitorGallery;

  constructor(
  ) {}

  ngAfterViewInit() {
    this.gallery.echo({
      value: 'Hello World!'
    });
  }

}
