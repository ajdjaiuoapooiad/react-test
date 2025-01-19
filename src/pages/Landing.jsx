import { customFetch } from "../utils";
const url = '/products?featured=true';


export const loader = async () => {
  const response = await customFetch(url);
  console.log(response);
  return response.data;
};

const Landing = () => {
  return (
    <div>Landing</div>
  )
}

export default Landing