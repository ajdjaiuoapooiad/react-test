import { Form, Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormCheckbox from "./FormCheckbox";
import data from "../data";


const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const Filter = () => {
    

    return (
    <>
        <Form className="">
        {/* SEARCH */}
        <FormInput
        type='search'
        label='search product'
        name='search'
        />
        {/* CATEGORIES */}
        <FormSelect
        label='select category'
        name='category'
        list={allCategories}
        />
     
        <br />
        <button type="submit" className="btn btn-info m-4">検索</button>
        <Link to='/products' className="btn btn-primary">Reset</Link>

        </Form>

    </>
  )
}

export default Filter