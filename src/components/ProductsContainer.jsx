import Job from "./Job"



const ProductsContainer = ({jobs}) => {

  return (
    <div>

    <h2>求人一覧</h2>

      {jobs.map((job) => {
        console.log(job);
        
          return (
            <Job key={job.id}  {...job} />
          )
      })}


    </div>

  )
}

export default ProductsContainer