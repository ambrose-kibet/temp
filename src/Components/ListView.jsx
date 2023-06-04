import { Link } from 'react-router-dom';
import { useFilterContext } from '../Context/FilterContext';
import { formatPrice } from '../utils';

const ListView = () => {
  const { filtered_products } = useFilterContext();
  return (
    <section className=" list-view">
      {filtered_products.map((item) => {
        return (
          <article className="products-card" key={item.id}>
            <div className="products-header">
              <img src={item.image} alt={item.name} className="main-image" />
            </div>
            <div className="Product-desc">
              <h4>{item.name}</h4>
              <p className="price">{formatPrice(item.price)}</p>
              <p>{item.description.substring(0, 300)}...</p>
              <Link to={`/products/${item.id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
