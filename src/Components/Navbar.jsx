import logo from '../Assets/logo.svg';
import {
  FaBars,
  FaShoppingCart,
  FaUserPlus,
  FaUserMinus,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useProductsContext } from '../Context/ProductsContext';
import { useCartContext } from '../Context/CartCOntext';
import { useUserContext } from '../Context/UserContext';

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { logout, myUser, loginWithRedirect } = useUserContext();

  return (
    <nav>
      <div className="main-container nav-container">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={() => openSidebar()}>
            <FaBars />
          </button>
        </div>
        <div className="nav-body">
          <NavLink
            to="/"
            className="link"
            style={({ isActive }) =>
              isActive ? { Color: 'red' } : { color: 'black' }
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className="link"
            style={({ isActive }) =>
              isActive ? { Color: 'red' } : { color: 'black' }
            }
          >
            about
          </NavLink>
          <NavLink
            to="products"
            className="link"
            style={({ isActive }) =>
              isActive ? { Color: 'red' } : { color: 'black' }
            }
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
            >
              checkout
            </NavLink>
          )}
        </div>
        <div className="nav-footer">
          <NavLink to="cart" className="link ">
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
      </div>
    </nav>
  );
};

export default Navbar;
