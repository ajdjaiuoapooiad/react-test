import { Link, Outlet } from "react-router-dom"


const Homelayout = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand  text-white" href="#!">求人検索アプリ</a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item active">
                <Link to='/search' className="nav-link  text-white ">Search</Link>
            </li>
            <li className="nav-item">
                <Link to='/create' className="nav-link  text-white ">Create</Link>
            </li>
            </ul>
        </div>
        </nav>

        <Outlet></Outlet>
    
    </>
  )
}

export default Homelayout