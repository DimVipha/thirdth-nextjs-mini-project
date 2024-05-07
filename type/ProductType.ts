export type ProductType = {
    id: number ;
    seller: string;
    category: string;
    name: string;
    desc: string;
    image: string;
    price: string;
    quantity: number;
}

export type CartItem={
    products:ProductType;
    qty:number
}