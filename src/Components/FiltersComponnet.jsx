import { useFilterContext } from '../Context/FilterContext';
import { getUniqueValues } from '../utils';
import { FaCheck } from 'react-icons/fa';
import { formatPrice } from '../utils';
const FiltersComponnet = () => {
  const {
    filters: {
      color,
      text,
      company,
      category,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilter,
    all_products,
    cLearFilters,
  } = useFilterContext();
  const colors = getUniqueValues(all_products, 'colors');
  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');

  return (
    <article className="filters-container">
      <form className="search-form">
        <input
          type={'text'}
          name="text"
          placeholder="search"
          className="search-input"
          value={text}
          onChange={(e) => updateFilter(e)}
        />
      </form>
      <div className="companies-container">
        <h4>Category</h4>
        {categories.map((item, index) => {
          return (
            <button
              type="buttin"
              className={
                category === item ? ' select-btn active-filter' : ' select-btn'
              }
              key={index}
              name="category"
              onClick={(e) => updateFilter(e)}
              data-value={item}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="companies-container">
        <h4>Company</h4>
        <select
          name="company"
          value={company}
          className="select"
          onChange={(e) => {
            updateFilter(e);
          }}
        >
          {companies.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="companies-container">
        <h4>Color</h4>
        <div className="colors-container">
          {colors.map((item, index) => {
            if (item === 'all') {
              return (
                <button
                  type="button"
                  className={
                    color === item ? ' select-btn active-filter' : ' select-btn'
                  }
                  key={index}
                  name="color"
                  onClick={(e) => updateFilter(e)}
                  data-id={item}
                >
                  {item}
                </button>
              );
            }
            return (
              <button
                key={index}
                className={
                  color === item ? 'color-btn active-color' : 'color-btn'
                }
                style={{ background: `${item}` }}
                name="color"
                onClick={(e) => updateFilter(e)}
                data-id={item}
              >
                {color === item ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="companies-container">
        <h4>Price</h4>
        <p className="price"> {formatPrice(price)}</p>
        <input
          type="range"
          min={min_price}
          max={max_price}
          name="price"
          value={price}
          onChange={(e) => updateFilter(e)}
        />
      </div>
      <div className="companies-container">
        <label htmlFor="shipping" className="ship-label">
          Free Shipping
          <input
            type="checkbox"
            name="shipping"
            checked={shipping}
            onChange={(e) => updateFilter(e)}
          />
        </label>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => cLearFilters()}
        >
          Clear filters
        </button>
      </div>
    </article>
  );
};

export default FiltersComponnet;
