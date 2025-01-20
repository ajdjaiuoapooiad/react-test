


const Job = ({title,income,category}) => {
    return (
        <div>

            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">{title}</h4>
                <strong>カテゴリー: {category}</strong>
                <p>年収: {income}</p>

            </div>
        </div>
    )
}

export default Job