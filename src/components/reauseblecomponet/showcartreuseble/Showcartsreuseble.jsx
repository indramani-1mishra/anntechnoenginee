import './addtocart.css'
export default function CartItemList({ items, onBuyNow,onRemove}) {
  return (
    <div className="cart-items">
      {items.map((item) => (
        <div className="cart-item" key={item._id}>
          <img
            src={item?.product?.images[0]}
            alt={item.product?.name}
            className="cart-img"
          />
          <div className="cart-details">
            <h3>{item.product?.productname}</h3>
            {/**<p>Price: ₹{item.product?.price}</p>
            <p>Quantity: {item.quantity}</p> */}
            <button className="buy-now-btn" onClick={() => onBuyNow(item)}>
              send Enquery
            </button>
            <button className="buy-now-btn" onClick={() => onRemove(item)} style={{"backgroundColor":"red","marginLeft":"10px"}}>
               remove to like
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
