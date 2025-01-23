import { useRef, useState } from "react";
import data from "../data";
import ProductsContainer from '../components/ProductsContainer';


const Create = () => {
  const [ jobs,setJobs ] = useState(data)
  const categorys = Array.from(new Set(jobs.map((j) => j.category)));
  const jobTitleRef = useRef();
  const jobIncomeRef = useRef();
  const jobCategoryRef = useRef()

  const handleAddJob = () => {
    const title = jobTitleRef.current.value;
    const income = jobIncomeRef.current.value;
    const category = jobCategoryRef.current.value;
    console.log(title, income,category);

    setJobs((prevJob) => {
      return [
        ...prevJob,
        { id: 10, title: title, income: income, category: category },
      ];
    });
    jobTitleRef.current.value = null;
    jobIncomeRef.current.value = null;
    jobCategoryRef.current.value = null;
  };

  return (
    <>
      <div className="p-5 ">
        <h1>Createページ</h1>

        <h4>Title</h4>

        <input type="text" ref={jobTitleRef} />
        <h4>Income</h4>
        <input type="text" ref={jobIncomeRef} />

        <h4>Category</h4>
        <select ref={jobCategoryRef} >
          {categorys.map((category) => {
            return (
              <option value={category} key={category}>
                {category}
              </option>
            );
          })}
        </select>

        <button className="btn btn-info" onClick={handleAddJob}>
          送信
        </button>





        <div className="p-5 col-6">
          <ProductsContainer jobs={jobs}/>
        </div>
      </div>
    </>
  );
};

export default Create;
