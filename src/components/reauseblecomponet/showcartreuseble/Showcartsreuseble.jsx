import './addtocart.css'
export default function CartItemList({ items, onBuyNow }) {
  return (
    <div className="cart-items">
      {items.map((item) => (
        <div className="cart-item" key={item._id}>
          <img
            src={item.product?.image}
            alt={item.product?.productname}
            className="cart-img"
          />
          <div className="cart-details">
            <h3>{item.product?.productname}</h3>
            <p>Price: ₹{item.product?.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button className="buy-now-btn" onClick={() => onBuyNow(item)}>
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
