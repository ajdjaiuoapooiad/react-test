import { Form, Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import data from "../data";

const allCategories = ['all', ...new Set(data.map((item) => item.category))];



const Filter = () => {
    const { meta, params } = useLoaderData();
    const { search, category} = params;

    return (
    <>
        <Form className="">
        {/* SEARCH */}
        <FormInput
        type='search'
        label='search product'
        name='search'
        defaultValue={search}
        />
        {/* CATEGORIES */}
        <FormSelect
        label='select category'
        name='category'
        list={allCategories}
        defaultValue={category}
        />


        <br />
        <button type="submit" className="btn btn-info m-4">検索</button>
        <Link to='/products' className="btn btn-primary">Reset</Link>

        </Form>

    </>
  )
}

export default Filter