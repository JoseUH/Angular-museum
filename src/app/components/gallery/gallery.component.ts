import { Component, OnInit } from '@angular/core';
import { GalleryInterface } from 'src/app/models/general-interfaces';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public galleryInfo: GalleryInterface;

  constructor() {
    this.galleryInfo = {
      title: 'Picture Gallery',
      pictures: [
        {
          name: 'El estanque de nenufares',
          year: 1899,
          artist: 'Claude monet',
          image: {
            src: 'https://www.salirconarte.com/wp-content/uploads/2017/08/monet-water-lilies-and-japanese-bridge-copia.jpg',
            alt: 'estanque de nenufares',
          },
        },{
          name: 'Haystacks at Giverny',
          year: 1884,
          artist: 'Claude monet',
          image: {
            src: 'https://uploads4.wikiart.org/images/claude-monet/haystacks-at-giverny.jpg!Large.jpg',
            alt: 'estanque de nenufares',
          }
        },{
          name: 'Camille Monet and a Child ',
          year: 1875,
          artist: 'Claude monet',
          image: {
            src: 'https://uploads0.wikiart.org/images/claude-monet/madame-monet-and-child(1).jpg!Large.jpg',
            alt: 'estanque de nenufares',
          }
        },{
          name: 'Impresión, sol naciente',
          year: 1872,
          artist: 'Claude monet',
          image: {
            src: 'https://uploads0.wikiart.org/00129/images/claude-monet/impression-sunrise.jpg!Large.jpg',
            alt: 'estanque de nenufares',
          }
        },{
          name: 'Antibes in the Morning',
          year: 1888,
          artist: 'Claude monet',
          image: {
            src: 'https://uploads0.wikiart.org/images/claude-monet/antibes-in-the-morning(1).jpg!Large.jpg',
            alt: 'estanque de nenufares',
          }
        },{
          name: 'Waterloo Bridge, London',
          year: 1903,
          artist: 'Claude monet',
          image: {
            src: 'https://uploads8.wikiart.org/images/claude-monet/waterloo-bridge-london-1.jpg!Large.jpg',
            alt: 'estanque de nenufares',
          }
        }]
    }
  }

  ngOnInit(): void {
    
  }
}
