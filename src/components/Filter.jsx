
import { useState } from "react";
import data from "../data";
import FormSelect from "./FormSelect";





const Filter = () => {
  const [ jobs,setJobs ] = useState(data)
  const [ searchName,setSearchName ] = useState('')
  const categories = Array.from(new Set(data.map((data) => data.category)));
  const incomes = Array.from(new Set(data.map((data) => data.income)));
	

  return (
    <div>
      <input type="text" onChange={(e) => setSearchName(e.target.value)} />
      <FormSelect list={categories} />
      <FormSelect list={incomes} />
    </div>
  );
};

export default Filter