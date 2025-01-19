import { Form, Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";



const Filter = () => {
    const { meta } = useLoaderData();
  

    return (
    <>
        <Form className="">
        <FormInput type='search' label='search product' name='search' />
        <FormSelect
        label='select category'
        name='category'
        list={meta.categories}
      />
        
        <br />
        <button type="submit" className="btn btn-info m-4">検索</button>
        <Link to='/' className="btn btn-primary">Reset</Link>

        </Form>

    </>
  )
}

export default Filter