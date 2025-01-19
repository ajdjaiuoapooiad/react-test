import { useState } from "react"
import data from "../data"
import Jobs from "./Jobs"

const JobList = () => {
    const [ jobs,setJobs ] = useState(data)

  return (
    <div>
        <Jobs jobs={jobs} />
    </div>

  )
}

export default JobList