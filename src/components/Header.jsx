import './Header.css'

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🛒 Tiki</h1>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Trang chủ</a>
          <a href="#" className="nav-link">Sản phẩm</a>
          <a href="#" className="nav-link">Khuyến mãi</a>
        </nav>
        <button className="cart-button" onClick={onCartClick}>
          <span className="cart-icon">🛍️</span>
          <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </header>
  )
}

export default Header
