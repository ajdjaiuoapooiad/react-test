


const JobContainer = ({jobs}) => {


    return (
        <>
        
            <h2>求人一覧</h2>
            <ul>

            {jobs.map((j) => {
                return (
                <div key={j.id}>

                    <div class="alert alert-success" role="alert">
                        <h4 class="alert-heading">{j.title}</h4>
                        <p>{j.category} <strong>{j.income}</strong></p>

                    </div>
                </div>
                
                )
            })}

            </ul>

        </>
    )
}

export default JobContainer