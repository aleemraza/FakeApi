import React,{useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import './Style.css'
const Index = () => {
    const [fake, setFake] = useState([])
    const FakeApi = async()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json()
        console.log(jsonData)
        setFake(jsonData)
    }
    useEffect(()=>{
        FakeApi();
    },[])
  return (
    <>
    <div class="container-fluid mt-3">
  <div class="row">
        {fake.map((values)=>{
            return(
                <>
    <NavLink to={`/products/${values.id}`}>
    <div class="col-sm-4">        
        <div class="card">
  <img src={values.image} class="card-img-top" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">{values.title}</h5>
    <p class="card-text">{values.description}</p>
  </div>
</div>
        </div>
</NavLink>            
                </>
            )
        })}    
  </div>
</div>

    </>
  )
}

export default Index
