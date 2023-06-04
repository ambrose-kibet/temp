import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { formatPrice } from '../utils';
const FeaturedProduct = ({ product }) => {
  const { name, price, image, id } = product;

  return (
    <article className="featured-card">
      <div className="featured-header">
        <img src={image} alt={name} className="featured-img" />
      </div>
      <div className="featured-body">
        <p>{name}</p> <p>{formatPrice(price)}</p>
      </div>
      <div className="featured-overlay">
        <Link to={`/products/${id}`} className="btn nav-btn">
          <FaSearch />
        </Link>
      </div>
    </article>
  );
};

export default FeaturedProduct;
