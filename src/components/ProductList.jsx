import { useState } from 'react'
import ProductCard from './ProductCard'
import './ProductList.css'

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 29990000,
    image: '📱',
    description: 'Điện thoại thông minh cao cấp',
    discount: 10
  },
  {
    id: 2,
    name: 'MacBook Pro M3',
    price: 45990000,
    image: '💻',
    description: 'Laptop chuyên nghiệp cho công việc',
    discount: 5
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    price: 5990000,
    image: '🎧',
    description: 'Tai nghe không dây chống ồn',
    discount: 15
  },
  {
    id: 4,
    name: 'iPad Air',
    price: 15990000,
    image: '📱',
    description: 'Máy tính bảng đa năng',
    discount: 8
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    price: 10990000,
    image: '⌚',
    description: 'Đồng hồ thông minh',
    discount: 12
  },
  {
    id: 6,
    name: 'Samsung Galaxy S24',
    price: 19990000,
    image: '📱',
    description: 'Điện thoại Android flagship',
    discount: 7
  }
]

function ProductList({ onAddToCart }) {
  return (
    <div className="product-list">
      <h2 className="section-title">Sản phẩm nổi bật</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
