import React from 'react'

const FormButton = ({list,filter}) => {
  return (
    <div>
        {list.map((item) => {
            return (
                <div  key={item} >
                <button className="my-1 btn btn-dark" value={item}  onClick={() => filter(item)}>
                {item}
                </button><br />
                </div>
            );
        })}
    </div>
  )
}

export default FormButton