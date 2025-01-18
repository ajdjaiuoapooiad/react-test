

const Category = ({categorys,filterItems}) => {
  return (
    <>
        <ul>
        {categorys.map((c) => {
            return (
                <>
                <input type='button'  value={c} key={c}  onClick={() => filterItems(c)}/> 
                <br /> 
                </>
            )
        })}
        </ul>
    </>
  )
}

export default Category