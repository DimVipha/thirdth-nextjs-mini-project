import { useDispatch } from "react-redux";
import { ProductType } from "@/type/ProductType";
import {
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
} from "@/redux/feature/cart/cartSlice";

interface ProductProps {
    product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id));
    };

    const handleUpdateQuantity = (newQuantity: number) => {
        dispatch(
            updateCartItemQuantity({ id: product.id, quantity: newQuantity })
        );
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleRemoveFromCart}>Remove from Cart</button>
            <input
                type="number"
                min="1"
                value={product.quantity}
                onChange={(e) => handleUpdateQuantity(parseInt(e.target.value))}
            />
        </div>
    );
};

export default Product;
