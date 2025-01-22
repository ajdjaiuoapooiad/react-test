import { useRef, useState } from "react";
import ProductsContainer from "../components/ProductsContainer";
import data from "../data";
import FormSelect from "../components/FormSelect";




const Products = () => {
  const [ jobs,setJobs ] = useState(data)
  const [ searchQuery,setSearchQuery ] = useState(data)
  const allCategorys = ['all', ...new Set(data.map((item) => item.category))]
  const allIncomes = ['all', ...new Set(data.map((item) => item.income))]

  const ref = useRef()
  const category = useRef()

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

  return (
    <>
      <div className="row">
        {/* Right Page */}
        <div className="col-3 p-5 bg-light">
          <h4>カテゴリー一覧</h4>
          <div>
            <label htmlFor="">キーワード</label>
            <input type="text" onChange={handlefilter} ref={ref} />

            <div className="my-3 px-2 py-3 border">
              <label htmlFor="">カテゴリー</label>
              {allCategorys.map((item) => {
                return (
                  <div  key={item} >
                  <button className="my-1 btn btn-dark" value={item}  onClick={() => filterCategory(item)}>
                    {item}
                  </button><br />
                  </div>
                );
              })}
            </div>

            <FormSelect list={allIncomes} />
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
