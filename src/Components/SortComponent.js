import React from "react";
import { FiGrid } from "react-icons/fi";
import { HiViewList } from "react-icons/hi";
import { useFilterContext } from "../Context/FilterContext";
const SortComponent = () => {
  const {
    filtered_products,
    grid_view,
    handleSort,
    setGridView,
    setListView,
    sort,
  } = useFilterContext();
  return (
    <article className="sort-container">
      <div className="view-btns">
        <button
          className={grid_view ? "active-btn" : null}
          onClick={setGridView}
        >
          <FiGrid />
        </button>
        <button
          className={!grid_view ? "active-btn" : null}
          onClick={setListView}
        >
          <HiViewList />
        </button>
      </div>
      <div className="sort-info">
        <p>{filtered_products.length} products found</p>
        <hr />
      </div>
      <form className="sort-form">
        <label htmlFor="sort">sort by</label>
        <select value={sort} onChange={(e) => handleSort(e)}>
          <option value="lowest"> Price (Lowest)</option>
          <option value="highest"> Price (Highest)</option>
          <option value="a-z"> Title (A-Z)</option>
          <option value="z-a"> Title (Z-A)</option>
        </select>
      </form>
    </article>
  );
};

export default SortComponent;
