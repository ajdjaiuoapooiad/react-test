

const App = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand  text-white" href="#!">求人検索アプリ</a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-md-0">
          <li className="nav-item active">
            <a className="nav-link  text-white" href="#!">Search </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-white" href="#!">Create</a>
          </li>
        </ul>
      </div>
    </nav>

      <div className="w-25 m-5 border border-dark">

        <button className="btn btn-info">test</button><br />
        <button className="btn btn-info">test</button>
        <button className="btn btn-info">test</button>
        <button className="btn btn-info">test</button>
        <button className="btn btn-info">test</button>
        <button className="btn btn-info">test</button>

      </div>

      <div className="w-75 m-5 border border-dark">

      </div>

    </>
  )
}

export default App