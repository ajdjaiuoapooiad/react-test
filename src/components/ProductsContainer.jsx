
import ProductsList from './ProductsList';


const ProductsContainer = ({jobs}) => {
  return (
    <div className='p-2'>

      <h3>検索一覧</h3>
      <strong className='m-3 font-weight-bolder'>該当件数{jobs.length} 件 </strong>
      <ProductsList jobs={jobs} />
    </div>
  );
};

export default ProductsContainer;