import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './cartSlice';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);  // Lấy cartItems từ Redux
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Coca', price: 10000, image: '/product1.jpg' },
    { id: 2, name: 'Monster', price: 30000, image: '/product2.png' },
    { id: 3, name: 'Sữa gạo hàn quốc', price: 55000, image: '/product3.png' },
    { id: 4, name: 'C2 vị hoa hồng', price: 8000, image: '/product4.jpg' },
  ];

  // Thêm 
  const handleAddItem = (product) => {
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };
    dispatch(addItem(newItem));
  };

  // Xóa 
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  // Cập nhật 
  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  // Tính tổng số lượng và tổng tiền
  const calculateTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalQuantity, totalPrice };
  };

  const { totalQuantity, totalPrice } = calculateTotal();

  return (
    <div>
      <h2>Giỏ Hàng</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={{ textAlign: 'center', width: '150px' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <h4>{product.name}</h4>
            <p>{product.price} VNĐ</p>
            <button onClick={() => handleAddItem(product)}>Thêm vào giỏ</button>
          </div>
        ))}
      </div>

      <ul style={{ paddingLeft: 0 }}>
        {cartItems.map((item) => (
          <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <span>
                {item.name} - {item.price} VNĐ x {item.quantity} = {item.price * item.quantity} VNĐ
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                style={{ width: '60px', marginRight: '10px', padding: '5px' }}
              />
              <button onClick={() => handleRemoveItem(item.id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '20px' }}>
        <h3>Tổng Số Lượng: {totalQuantity}</h3>
        <h3>Tổng Tiền: {totalPrice} VNĐ</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
