import { useRef, useState } from "react";
import ProductsContainer from "../components/ProductsContainer";
import data from "../data";
import FormButton from "../components/FormButton";




const Products = () => {
  const [ jobs,setJobs ] = useState(data)
  const [ searchQuery,setSearchQuery ] = useState(data)
  const allCategorys = ['all', ...new Set(data.map((item) => item.category))]
  const allIncomes = ['all', ...new Set(data.map((item) => item.income))]
  const ref = useRef()

  const handlefilter = () => {
    console.log(ref.current.value);
    const items = jobs.filter((job) => job.title.includes(ref.current.value))
    setSearchQuery(items)
  }

  const filterCategory = (category) => {
    if(category === 'all'){
      setSearchQuery(data)
      return;
    }
    const newItems = data.filter((item) => item.category === category )
    setSearchQuery(newItems)
  }
  const filterIncome = (income) => {
    if(income === 'all'){
      setSearchQuery(data)
      return;
    }
    const newItems = data.filter((item) => item.income === income )
    setSearchQuery(newItems)
  }





  return (
    <>
      <div className="row">
        {/* Right Page */}
        <div className="col-3 p-5 bg-light">
          <h4></h4>
          <div>

            {/* Form Input  */}
            <div className="py-3 border p-2">
            <label htmlFor="">キーワード</label>
            <input className="w-75" type="text" onChange={handlefilter} ref={ref} />
            </div>

            {/* Filter Category */}
            <div className="my-3 px-2 py-3 border">
              <label htmlFor="">求人カテゴリ</label>
              <FormButton list={allCategorys} filter={filterCategory} />
            </div>

            {/* Filter Income */}
            <div className="my-3 px-2 py-3 border">
              <label htmlFor="">年収</label>
            <FormButton list={allIncomes} filter={filterIncome}  />
            </div>

          </div>
         
        </div>



        {/* Left Page */}
        <div className="col-9  border-start border-5">
          
          <ProductsContainer jobs={searchQuery} />
        </div>
      </div>
    </>
  );
};

export default Products;
