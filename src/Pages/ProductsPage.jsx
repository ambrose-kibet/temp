import FiltersComponent from '../Components/FiltersComponnet';
import GridView from '../Components/GridView';
import HeroComponent from '../Components/HeroComponent';
import ListView from '../Components/ListView';
import SortComponent from '../Components/SortComponent';
import { useFilterContext } from '../Context/FilterContext';
const ProductsPage = () => {
  const { grid_view } = useFilterContext();
  return (
    <main className="main">
      <HeroComponent title={'products'} />
      <div className="products-container">
        <div className="section-filter">
          <FiltersComponent />
        </div>

        <div className="all-products">
          <SortComponent />
          {grid_view ? <GridView /> : <ListView />}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
