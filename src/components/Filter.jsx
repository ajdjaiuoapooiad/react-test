import { Form, Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";





const Filter = () => {
  const { meta, params } = useLoaderData();
  const { search, income, category } = params;
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      
      {/* CATEGORIES */}
      <FormSelect
        label='select category'
        name='category'
        list={meta.categories}
        defaultValue={category}
        size='select-sm'
      />
      {/* COMPANIES */}
      <FormSelect
        label='select income'
        name='income'
        list={meta.incomes}
        defaultValue={income}
        size='select-sm'
      />
   


      {/* BUTTONS */}
      <button type='submit' className='btn btn-primary btn-sm'>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        reset
      </Link>
    </Form>
  );
};

export default Filter