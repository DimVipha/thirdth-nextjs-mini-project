export type ProductType = {
    id: number ;
    seller: string;
    category: string;
    name: string;
    desc: string;
    image: string;
    price: number;
    quantity: number;
}

export type CartItem={
    products:ProductType;
    qty:number
}