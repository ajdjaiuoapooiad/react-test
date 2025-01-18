import { useState } from "react";
import data from '../data';
import { Form } from "react-router-dom";
import JobContainer from "../components/JobContainer";
import Category from "../components/Category";


const Search = () => {
    const [ jobs,setJobs ] = useState(data)
    const categorys = Array.from(new Set(jobs.map((job) => job.category)));
    const incomes = Array.from(new Set(jobs.map((job) => job.income)))

    const filterItems = (category) => {
        console.log(category);
        if(category === 'all'){
            setJobs(data)
            return;
        }
        const newItems = data.filter((item) => item.category === category )
        setJobs(newItems)
        
    }
  return (
    <>
        <div className="row">

        <div className="col-3 p-5 bg-light">

        <Form className="">

        <h4>カテゴリー一覧</h4>

        <Category categorys={categorys} filterItems={filterItems} />

        
        <select className="w-40"  name="item">
        {incomes.map((income) => {
            return(
            <option key={income.id} >{income}</option>
                )
            })
        }
        </select>

        <button type="submit" className="btn btn-info">検索</button>

        </Form>

        </div>



        <div className="col-9 p-5 border-start border-5">
        <JobContainer jobs={jobs} />



        </div>
        </div>
    </>
  )
}

export default Search