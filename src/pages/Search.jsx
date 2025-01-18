import { useState } from "react";
import data from '../data';
import { Form } from "react-router-dom";


const Search = () => {
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
        <div className="row">

        <div className="col-3 p-5">

        <Form className="">

        <h4>カテゴリー一覧</h4>

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

        <button type="submit" className="btn btn-info">検索</button>

        </Form>

        </div>



        <div className="col-9 p-5">
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
        </div>
    </>
  )
}

export default Search