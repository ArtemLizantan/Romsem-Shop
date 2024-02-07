import logo from "/img/sidebar/logo.jpg";
import { sidebarItems } from "../../data/data";
import { SidebarItem } from "../../interfaces/interfaces";
import "./sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__body">
        <div className="sidebar__top">
          <div className="sidebar__logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="sidebar__line"></div>
        <div className="sidebar__bottom">
          <ul className="sidebar__list">
            {sidebarItems.map(({ nameProduct, icon, id }: SidebarItem) => (
              <li key={id} className="sidebar__list-item">
                <img src={icon} alt="product-icon" />
                <a href="#" className="sidebar__list-link">
                  {nameProduct}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
