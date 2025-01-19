

const FormSelect = ({incomes,filterIncomeItems}) => {
  return (
    <>
        <select className="w-40"  name="item" >
        {incomes.map((income) => {
            return(
            <option key={income.id}  >{income}</option>
                )
            })
        }
        </select>
    </>
  )
}

export default FormSelect