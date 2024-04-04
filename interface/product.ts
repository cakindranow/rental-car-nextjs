export interface ProductInterface {
    id : string
    name : string
    image_url : string
    price : number
}
export interface ProductDetailProps {
    params: {
        id: string;
        name : string
        image_url : string
        price : string
    };
  }