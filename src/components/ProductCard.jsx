import './ProductCard.css'

function ProductCard({ product, onAddToCart }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price)
  }

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price

  return (
    <div className="product-card">
      <div className="product-image">{product.image}</div>
      {product.discount && (
        <div className="discount-badge">-{product.discount}%</div>
      )}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">
          {product.discount && (
            <span className="original-price">{formatPrice(product.price)}</span>
          )}
          <span className="current-price">{formatPrice(discountedPrice)}</span>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart({ ...product, price: discountedPrice })}
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  )
}

export default ProductCard
