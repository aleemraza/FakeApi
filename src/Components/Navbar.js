import React,{useEffect,useState} from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const [categories, setCategories] = useState([])
    // console.log(categories[0])
    const FakeApi = async()=>{
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const jsonData = await response.json()
        // console.log(jsonData)
        setCategories(jsonData)
    }
    useEffect(()=>{
        FakeApi();
    },[])
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
                 <NavLink className="nav-link" to={`/electronics/${categories[0]}`}>Electronics</NavLink>
        </li>
        <li className="nav-item">
                 <NavLink className="nav-link" to={`/jewelery/${categories[1]}`}>Jewelery</NavLink>
        </li>
        <li className="nav-item">
                 <NavLink className="nav-link" to={`/menclothing/${categories[2]}`}>Men's Clothing</NavLink>
        </li>
        <li className="nav-item">
                 <NavLink className="nav-link" to={`/womenclothing/${categories[3]}`}>Women's clothing</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
