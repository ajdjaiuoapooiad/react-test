import { useState } from "react";
import data from '../data';
import { Form } from "react-router-dom";
import JobContainer from "../components/JobContainer";


const Search = () => {
    const [ jobs,setJobs ] = useState(data)
    const categorys = Array.from(new Set(jobs.map((job) => job.category)));
    const incomes = Array.from(new Set(jobs.map((job) => job.income)))

    const selectCategory = (category) => {
        if(category==='all'){
        setJobs(jobs)
        return;
        }


        const selectedJob = jobs.filter((job) => job.category === category)
        setJobs(selectedJob);
    }




  return (
    <>
        <div className="row">

        <div className="col-3 p-5">

        <Form className="">

        <h4>カテゴリー一覧</h4>

        <ul>
        <button onClick={() => selectCategory('all')}>all</button>
        {categorys.map((c) => {
            return (
            <button onClick={() => selectCategory(c)} key={c.id} >{c}</button>
            )
        })}

        </ul>
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



        <div className="col-9 p-5">
        <JobContainer jobs={jobs} />



        </div>
        </div>
    </>
  )
}

export default Search