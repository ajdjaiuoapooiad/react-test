import { Form, Link, useLoaderData } from "react-router-dom"
import FormCheckbox from "./FormCheckbox"
import FormSelect from "./FormSelect"


const Filter = () => {
    const { meta, params } = useLoaderData();
    const {category,income} = params

    return (
    <>
        <Form className="">


        <FormCheckbox />
        <FormSelect label='Income' name='income' list={meta.income} defaultValue={income} />

        <br />
        <button type="submit" className="btn btn-info m-4">検索</button>
        <Link to='/' className="btn btn-primary">Reset</Link>

        </Form>

    </>
  )
}

export default Filter