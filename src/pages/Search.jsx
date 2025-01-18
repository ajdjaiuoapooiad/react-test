import { useState } from "react";
import data from '../data';
import { Form } from "react-router-dom";
import JobContainer from "../components/JobContainer";
import Category from "../components/Category";
import Income from "../components/Income";


const Search = () => {
    const allCategorys = ['all', ...new Set(data.map((item) => item.category ))]
    const allIncomes = ['all', ...new Set(data.map((item) => item.income ))]
    const [ jobs,setJobs ] = useState(data)
    const [ categorys,setCategorys ] = useState(allCategorys)
    const [ incomes,setIncomes ] = useState(allIncomes)


    const filterCategoryItems = (category) => {
        console.log(category);
        if(category === 'all'){
            setJobs(data)
            return;
        }
        const newItems = data.filter((item) => item.category === category )
        setJobs(newItems)
        
    }

    const filterIncomeItems = (income) => {
        console.log(income);
        if(income === 'all'){
            setJobs(data)
            return;
        }
        const newItems = data.filter((item) => item.income === income )
        setJobs(newItems)
        
    }
  return (
    <>
        <div className="row">

        <div className="col-3 p-5 bg-light">

        <Form className="">

        <h4>カテゴリー一覧</h4>

        <Category categorys={categorys} filterItems={filterCategoryItems} />
        <Income incomes={incomes} filterItems={filterIncomeItems} />

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