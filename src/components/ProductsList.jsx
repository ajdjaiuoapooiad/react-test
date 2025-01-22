

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
          <div key={job.id} className='border p-4 m-3'>
            <p className=''>{job.title}</p>
            <p>カテゴリー: {job.category}</p>
            <p>年収: {job.income}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;