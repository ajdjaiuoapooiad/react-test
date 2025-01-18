import { useRef, useState } from "react"
import data from '../data';


const Create = () => {
    const [ jobs,setJobs ] = useState(data)
    const categorys = Array.from(new Set(jobs.map((j) => j.category)));
    const jobTitleRef = useRef()
    const jobIncomeRef = useRef()

    

    return (
      <>
      <div className="p-5 ">

     
        <h1>Createページ</h1>

        <form action="" >
 
        <h4>Title</h4>

        <input type="text" ref={jobTitleRef} />
        <h4>Income</h4>
        <input type="text" ref={jobIncomeRef} />

        <h4>Category</h4>
        <select name="" id="" >
          {categorys.map((c) => {
            return (
              <option value="">{c}</option>
            )
          })}
        
          
        </select>

        <button className="btn btn-info" type="submit">送信</button>

        </form>
      </div>
      </>
    )
  }
  
  export default Create