import { useRef, useState } from "react";
import Filter from "../components/Filter";
import ProductsContainer from "../components/ProductsContainer";
import data from "../data";
import FormSelect from "../components/FormSelect";




const Products = () => {
  const [ jobs,setJobs ] = useState(data)
  const [ searchQuery,setSearchQuery ] = useState(data)
  const categories = Array.from(new Set(data.map((data) => data.category)));
  const incomes = Array.from(new Set(data.map((data) => data.income)));
  const ref = useRef()
  
  const handlefilter = () => {
    console.log(ref.current.value);
    const items = jobs.filter((job) => job.title.includes(ref.current.value))
    setSearchQuery(items)
  }

  return (
    <>
      <div className="row">
        {/* Right Page */}
        <div className="col-3 p-5 bg-light">
          <h4>カテゴリー一覧</h4>
          <div>
            <input type="text" onChange={handlefilter} ref={ref} />
            <FormSelect list={categories} />
            <FormSelect list={incomes} />
          </div>
         
        </div>

        {/* Left Page */}
        <div className="col-9 p-5 border-start border-5">
          
          <ProductsContainer jobs={searchQuery} />
        </div>
      </div>
    </>
  );
};

export default Products;
