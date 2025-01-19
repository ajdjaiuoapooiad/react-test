import { Form, Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormCheckbox from "./FormCheckbox";



const Filter = () => {
    const { meta, params } = useLoaderData();
    const { search, company, category, shipping, order } = params;

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
        list={meta.categories}
        defaultValue={category}
        />
        {/* COMPANIES */}
        <FormSelect
        label='select company'
        name='company'
        list={meta.companies}
        defaultValue={company}
        />
        {/* ORDER */}
        <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
        />

        {/* SHIPPING */}
        <FormCheckbox
        label='free shipping'
        name='shipping'
        defaultValue={shipping}
        />

        <br />
        <button type="submit" className="btn btn-info m-4">検索</button>
        <Link to='/' className="btn btn-primary">Reset</Link>

        </Form>

    </>
  )
}

export default Filter