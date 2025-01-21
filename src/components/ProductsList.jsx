
import { Link, useLoaderData } from 'react-router-dom';

const ProductsList = () => {
  const { products } = useLoaderData();
  console.log(products);
  
  return (
    <div className='mt-12 grid gap-y-8'>
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;

        return (
          <div>
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;