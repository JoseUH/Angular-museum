export interface NavigatorInterface {
    content: string,
    link: string
}
export interface GalleryInterface{
    title: string
    pictures: pictureInterface[];
}

export interface pictureInterface{
    name: string,
    year:number,
    artist:string;
    image: ImageInterface
}

export interface ImageInterface {
    src: string;
    alt: string
}
