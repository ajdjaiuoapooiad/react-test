import { useState } from "react";
import data from "./data";


const App = () => {
  const [ posts,setPosts ] = useState(data)
  const categorys = Array.from(new Set(posts.map((post) => post.category)));
  const incomes = Array.from(new Set(posts.map((post) => post.income)))

  const selectCategory = (category) => {
    if(category==='all'){
      setPosts(posts)
      return;
    }


    const selectedPosts = posts.filter((post) => post.category === category)
    setPosts(selectedPosts);
  }

  const selectIncome = (income) => {

    const selectedPosts = posts.filter((post) => post.income === income)
    setPosts(selectedPosts);
  }


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
            <a className="nav-link  text-white " href="#!">Search </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-white" href="#!">Create</a>
          </li>
        </ul>
      </div>
    </nav>

      <div className="w-25">

      <ul>
        <button onClick={() => selectCategory('all')}>all</button>
        {categorys.map((c) => {
          return (
            <button onClick={() => selectCategory(c)} key={c.id} >{c}</button>
          )
        })}
        
      </ul>
      {
        incomes.map((income) => {
          return(
            <select className="w-40"  onChange={() => selectIncome(income)} name="item">
            <option >{income}</option>
            </select>
          )
        })
      }

      </div>

      <div className="w-75">
      <h2>求人一覧</h2>
        <ul>

        {posts.map((p) => {
          return (
            <div>
              <li>{p.id}</li>
              <li>{p.title}</li>
              <li>{p.category}</li>
              <li>{p.income}</li>
            </div>
          )
        })}

        </ul>


      </div>

    </>
  )
}

export default App