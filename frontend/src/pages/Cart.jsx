import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0);

  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <img src={item.image} className="w-24 h-24 object-cover rounded" alt={item.name} />
                <div className="flex-1 ml-4">
                  <h4 className="font-bold">{item.name}</h4>
                  <p>{item.price}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    className="border px-2 py-1 w-16 mt-1"
                    onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right text-lg font-semibold mt-4">Total: ${total.toFixed(2)}</div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
