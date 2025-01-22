const FormSelect = ({list}) => {
  return (
    <div className='form-control'>
      <select 
      >
        {list.map((item) => {
          return (
            <option key={item} value={item} >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;