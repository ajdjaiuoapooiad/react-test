import { useRef, useState } from "react"
import data from '../data';


const Create = () => {
    const [ jobs,setJobs ] = useState(data)
    const categorys = Array.from(new Set(jobs.map((j) => j.category)));
    const jobTitleRef = useRef()
    const jobIncomeRef = useRef()
    const jobCategoryRef = useRef()

    const handleClick = () => {
      const title =jobTitleRef.current.value
      const income = jobIncomeRef.current.value
      
      console.log(title,income);
      
    }

    

    return (
      <>
      <div className="p-5 ">

     
        <h1>Createページ</h1>

 
        <h4>Title</h4>

        <input type="text" ref={jobTitleRef} />
        <h4>Income</h4>
        <input type="text" ref={jobIncomeRef} />

        <h4>Category</h4>
        <select name=""   ref={jobCategoryRef}>
          {categorys.map((c) => {
            return (
              <option value="" key={c.id}>{c}</option>
            )
          })}
        
          
        </select>

        <button className="btn btn-info"  onClick={handleClick}>送信</button>

  
      </div>
      </>
    )
  }
  
  export default Create