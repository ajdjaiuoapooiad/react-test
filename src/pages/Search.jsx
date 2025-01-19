import { useState } from "react";
import data from '../data';
import JobContainer from "../components/JobContainer";
import Filter from "../components/Filter";
import { customFetch } from "../utils";


const url = '/search';
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url, { params });

  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta, params };
};

const Search = () => {

  const [ jobs,setJobs ] = useState(data)

  return (
    <>
        <div className="row">



        {/* Right Page */}
        <div className="col-3 p-5 bg-light">

        <h4>カテゴリー一覧</h4>
        
        <Filter />
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