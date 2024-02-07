import "./header.scss";
import cart from "/img/icons/cart.png"
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__body">
        <div className="header__left">
          <div className="header__left-item">
            <h2 className="header__our-phone">Наш телефон</h2>
            <a href="tel:+380503130386" className="header__left-phone">
              +380503130386
            </a>
            <a href="tel:+380503130386" className="header__left-phone">
              +380503130386
            </a>
          </div>
        </div>
        <div className="header__center">
          <div className="header__center-city">
            <span className="header__center-city-title">Город:</span>
            <span className="header__center-city-name">Харьков</span>
          </div>
          <div className="header__center-links">
            <a href="#" className="header__center-link">
              Отзывы
            </a>
            <a href="#" className="header__center-link">
              Доставка и оплата
            </a>
            <div className="header__center-cart">
              <button className="header__center-cart-button"><img src={cart} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
