export interface ProductDto {
 name: string;
 price: Price;
 stock: number;

}
export interface Product {
    id: string;
    name: string;
    price: Price;
    stock: number;
}
export interface ProductWithFormattedPrice {
    id: string;
    name: string;
    price: string;
    stock: number;
}

export interface Price {
 amount: number;
 currency: string;
}
