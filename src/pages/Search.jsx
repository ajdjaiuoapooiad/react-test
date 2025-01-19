
import Filter from "../components/Filter";
import { customFetch } from '../utils/index';
import JobList from "../components/JobList";



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
        <JobList />



        </div>
        </div>
    </>
  )
}

export default Search