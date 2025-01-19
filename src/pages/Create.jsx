import { useRef, useState } from "react"
import data from '../data';
import JobContainer from '../components/JobContainer';


const Create = () => {
    const [ jobs,setJobs ] = useState(data)
    const categorys = Array.from(new Set(jobs.map((j) => j.category)));
    const jobTitleRef = useRef()
    const jobIncomeRef = useRef()


    const handleAddJob = () => {
      const title =jobTitleRef.current.value
      const income = jobIncomeRef.current.value
      console.log(title,income);
      
      setJobs((prevJob) => {
        return [...prevJob,{id: 10,title: title,income: income,category: 'Python'}]
      })
      jobTitleRef.current.value = null;
      jobIncomeRef.current.value = null;
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
        <select >
          {categorys.map((c) => {
            return (
              <option value="" key={c.id}>{c}</option>
            )
          })}
        
          
        </select>

        <button className="btn btn-info"  onClick={handleAddJob}>送信</button>


        <div className="p-5 col-6">

          <JobContainer jobs={jobs} />
        </div>
  
      </div>

      </>
    )
  }
  
  export default Create