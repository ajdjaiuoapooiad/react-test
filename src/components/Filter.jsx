import { Form, Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput";


const Filter = () => {
    const { meta, params } = useLoaderData();
    const {category,income} = params

    return (
    <>
        <Form className="">
        <FormInput type='search' label='search product' name='search' />

        
        <br />
        <button type="submit" className="btn btn-info m-4">検索</button>
        <Link to='/' className="btn btn-primary">Reset</Link>

        </Form>

    </>
  )
}

export default Filter