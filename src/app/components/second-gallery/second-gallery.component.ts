import { Component, OnInit } from '@angular/core';
import { GalleryInterface } from 'src/app/models/general-interfaces';

@Component({
  selector: 'app-second-gallery',
  templateUrl: './second-gallery.component.html',
  styleUrls: ['./second-gallery.component.scss']
})
export class SecondGalleryComponent implements OnInit {
  public galleryInfo: GalleryInterface;

  constructor() {
    this.galleryInfo = {
      title: 'Picture Gallery',
      pictures: [
        {
          name: 'Charing Cross Bridge, London',
          year: 1890,
          artist: 'Camille Pissarro',
          image: {
            src: 'https://estaticos-cdn.elperiodico.com/clip/4cca835d-e3b6-4e15-9ddb-572722a134a3_alta-libre-aspect-ratio_default_0.jpg',
            alt: 'estanque de nenufares',
          },
        },{
          name: "Route d Ennery",
          year: 1867,
          artist: 'Camille Pissarro',
          image: {
            src: 'https://estaticos-cdn.elperiodico.com/clip/0217e4f8-7272-4858-ab58-ddae978cf42e_alta-libre-aspect-ratio_default_0.jpg',
            alt: 'estanque de nenufares',
          }
        },{
          name: 'The Hermitage at Pontoise',
          year: 1867,
          artist: 'Camille Pissarro',
          image: {
            src: 'https://i.ytimg.com/vi/zisrTiEhSYU/maxresdefault.jpg',
            alt: 'estanque de nenufares',
          }
        }]
    }
  }

  ngOnInit(): void {
    
  }
}
