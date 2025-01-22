
import { useLoaderData } from 'react-router-dom';
import data from '../data';
import { useState } from 'react';

const ProductsList = () => {
  const [ jobs,setJobs ] = useState(data)
  console.log(jobs);
  
  
  return (
    <div className='mt-12 grid gap-y-8'>
      <h4>{jobs.length}　件 </h4>

      {jobs.map((job) => {

        return (
          <div key={job.id}>

          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;