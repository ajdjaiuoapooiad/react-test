import { useRef, useState } from "react";
import data from "../data";
import ProductsContainer from '../components/ProductsContainer';


const Create = () => {
  const [ jobs,setJobs ] = useState(data)
  const allCategorys = [...new Set(data.map((item) => item.category))]
  const jobTitleRef = useRef();
  const jobIncomeRef = useRef();
  const jobCategoryRef = useRef()

  // Create機能
  const handleAddJob = () => {
    const title = jobTitleRef.current.value;
    const income = jobIncomeRef.current.value;
    const category = jobCategoryRef.current.value;
    console.log(title, income,category);

    setJobs((prevJob) => {
      return [
        ...prevJob,
        { id: 30, title: title, income: income, category: category },
      ];
    });
    jobTitleRef.current.value = null;
    jobIncomeRef.current.value = null;
    jobCategoryRef.current.value = null;
  };

  return (
    <div>
      <div className="p-5 m-5 w-50 border">
        <h4>求人投稿</h4>

        <div className="py-3">
        <strong>求人カテゴリを選択</strong><br />
        <select ref={jobCategoryRef} >
          {allCategorys.map((category) => {
            return (
              <option value={category} key={category} defaultValue='カテゴリーを選択'>
                {category}
              </option>
            );
          })}
        </select>
        </div >
      
        <div className="py-3">
        <strong>年収(万円)</strong><br />
        <input type="text" ref={jobIncomeRef} /><br />

        </div>

        <div className="py-3">
        <strong>求人タイトル</strong><br />
        <input type="text" ref={jobTitleRef} />
        </div>


        <button className="btn btn-dark px-3 my-3" onClick={handleAddJob} >
          投稿
        </button>


      </div>



        <div className="p-5 col-6">
          <ProductsContainer jobs={jobs}/>
        </div>
    </div>
  );
};

export default Create;
