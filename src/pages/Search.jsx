import { useState } from "react";
import data from '../data';
import { Form, Link } from "react-router-dom";
import JobContainer from "../components/JobContainer";
import FormCheckbox from "../components/FormCheckbox";
import FormSelect from "../components/FormSelect";


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



        {/* Right Page */}
        <div className="col-3 p-5 bg-light">

        <Form className="">

        <h4>カテゴリー一覧</h4>

        <FormCheckbox categorys={categorys} filterItems={filterCategoryItems} />
        <FormSelect incomes={incomes} filterItems={filterIncomeItems} />

        <br />
        <button type="submit" className="btn btn-info m-4">検索</button>
        <Link to='/' className="btn btn-primary">Reset</Link>

        </Form>

        </div>




        {/* Left Page */}
        <div className="col-9 p-5 border-start border-5">
        <JobContainer jobs={jobs} />



        </div>
        </div>
    </>
  )
}

export default Search