
import { useLoaderData } from 'react-router-dom';

const ProductsList = () => {
  const { products } = useLoaderData();
  console.log(products);
  
  return (
    <div className='mt-12 grid gap-y-8'>

      {products.map((product) => {
        const { title, category, income } = product.attributes;

        return (
          <div key={product.id} className='border p-3 m-3'>
            <p>{title}</p>
            <p>{category}</p>
            <p>{income}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;