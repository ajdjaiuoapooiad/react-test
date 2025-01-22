import Filter from "../components/Filter";
import { customFetch } from "../utils/index";
import ProductsContainer from "../components/ProductsContainer";


// 検索機能
const url = '/db';
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url, { params });

  const products = response.data.data;
  const meta = response.data.meta;
  console.log(meta);
  
  return { products, meta, params };
};

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
