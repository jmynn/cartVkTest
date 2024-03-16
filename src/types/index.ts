export type ProductId = number
export type ProductRating = {
    rate: number;
    count: number;
};
export type Product = {
    id: ProductId;
    title: string;
    price: number;
    description: string;
    category:
    | 'jewelery'
    | "men's clothing"
    | 'electronics'
    | "women's clothing";
    image: `https://${string}`;
    rating: ProductRating;
};

export type CartItemBody = {
    count: number
    amount: number
}
export type CartItem = {
    [productId: ProductId]: CartItemBody
};

export type Cart = {
    products: CartItem;
    totalPrice: number;
    addProduct: (cartItem: Product) => void;
    removeProduct: (cartItem: Product, idAll?: true) => void;
};

