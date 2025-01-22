
import ProductsList from './ProductsList';


const ProductsContainer = ({jobs}) => {
  return (
    <div className='p-2'>

      <h3>検索結果</h3>
      <h4 className='m-3'>{jobs.length} 件 </h4>
      <ProductsList jobs={jobs} />
    </div>
  );
};

export default ProductsContainer;