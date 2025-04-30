export default CartPage;
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
    const { cart, getCartTotal, clearCart } = useCart();
}
<div>
    {cart.map(item => (
        <CartItem key={item.product.id} item={item} />
    ))}
</div>

