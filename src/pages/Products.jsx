import Filter from "../components/Filter";
import ProductsContainer from "../components/ProductsContainer";




const Products = () => {

  return (
    <>
      <div className="row">
        {/* Right Page */}
        <div className="col-3 p-5 bg-light">
          <h4>カテゴリー一覧</h4>

          <Filter />
        </div>

        {/* Left Page */}
        <div className="col-9 p-5 border-start border-5">
          
          <ProductsContainer />
        </div>
      </div>
    </>
  );
};

export default Products;
