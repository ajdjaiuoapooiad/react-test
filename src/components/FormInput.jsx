

const FormInput = ({type,label,name,defaultvalue}) => (
    <div>
        <label htmlFor={name} className="label">
            <span>{label}</span>
        </label>
        <input type={type} name={name} defaultValue={defaultvalue} />
    </div>
)

export default FormInput