


const Jobs = ({jobs}) => {


    return (
        <>
        
            <h2>求人一覧</h2>
            <ul>

            {jobs.map((j) => {
                return (
                <div key={j.id}>

                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">{j.title}</h4>
                        <strong>カテゴリー: {j.category}</strong>
                        <p>年収: {j.income}</p>

                    </div>
                </div>
                
                )
            })}

            </ul>

        </>
    )
}

export default Jobs