
import { useRef, useState } from "react";
import data from "../data";
import FormSelect from "./FormSelect";





const Filter = ({jobs}) => {

  const categories = Array.from(new Set(data.map((data) => data.category)));
  const incomes = Array.from(new Set(data.map((data) => data.income)));
	const ref = useRef()

  const handlefilter = () => {
    const selectedItems = jobs.filter((job) => job.title.includes(ref.current.value))
    setJobs(selectedItems)
  }
    
  

  return (
    <div>
      <input type="text" onChange={handlefilter} ref={ref} />
      <FormSelect list={categories} />
      <FormSelect list={incomes} />
    </div>
  );
};

export default Filter