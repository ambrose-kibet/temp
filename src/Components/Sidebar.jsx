import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import logo from '../Assets/logo.svg';
import { useProductsContext } from '../Context/ProductsContext';
import { useCartContext } from '../Context/CartCOntext';
import { useUserContext } from '../Context/UserContext';
const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useProductsContext();
  const { total_items } = useCartContext();
  const { logout, myUser, loginWithRedirect } = useUserContext();
  return (
    <aside
      className={
        isSidebarOpen ? 'sidebar  open-sidebar' : 'sidebar  close-sidebar'
      }
    >
      <div className="Sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" onClick={() => closeSidebar()}>
          <FaTimes />
        </button>
      </div>
      <div className="sidebar-links">
        <NavLink
          to="/"
          className="link"
          style={({ isActive }) =>
            isActive ? { Color: 'red' } : { color: 'black' }
          }
          onClick={() => closeSidebar()}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className="link"
          style={({ isActive }) =>
            isActive ? { Color: 'red' } : { color: 'black' }
          }
          onClick={() => closeSidebar()}
        >
          about
        </NavLink>
        <NavLink
          to="products"
          className="link"
          style={({ isActive }) =>
            isActive ? { Color: 'red' } : { color: 'black' }
          }
          onClick={() => closeSidebar()}
        >
          products
        </NavLink>
        {myUser.isAuthenticated && (
          <NavLink
            to="checkout"
            className="link"
            style={({ isActive }) =>
              isActive ? { Color: 'red' } : { color: 'black' }
            }
            onClick={() => closeSidebar()}
          >
            checkout
          </NavLink>
        )}
      </div>
      <div className="sidebar-footer">
        <NavLink to="cart" className="link " onClick={() => closeSidebar()}>
          <p className="cart-link">
            Cart
            <FaShoppingCart className="cart-icon" />
            <span className="pill">{total_items}</span>
          </p>
        </NavLink>
        {myUser.isAuthenticated ? (
          <button
            type="button"
            className="loginbtn"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
            <span>
              <FaUserPlus />
            </span>
          </button>
        ) : (
          <button
            type="button"
            className="loginbtn"
            onClick={() => loginWithRedirect()}
          >
            Login
            <span>
              <FaUserMinus />
            </span>
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
