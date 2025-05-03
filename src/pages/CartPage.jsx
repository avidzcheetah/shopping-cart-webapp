import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    
    return (
        <div>
            <div>
                {cart.map(item => (
                    <CartItem key={item.product.id} item={item} />
                ))}
            </div>

            <div>
                <h2>Cart Total: ${getCartTotal()}</h2>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
    );
}

export default CartPage;
