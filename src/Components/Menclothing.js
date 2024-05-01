import React,{useEffect,useState}  from 'react'
import {useParams} from 'react-router-dom'
const Menclothing = () => {
    const { menclothing }  = useParams()
    const [mencol, setMencol] = useState([])
    const FakeApi = async()=>{
        const response = await fetch(`https://fakestoreapi.com/products/category/${menclothing}`);
        const jsonData = await response.json()
        console.log(jsonData)
        setMencol(jsonData)
    }
    useEffect(()=>{
        FakeApi();
    },[])
  return (
    <div>
      <div class="container text-center">
  <div class="row">
    <div class="col-4">
        {mencol.map((values)=>{
            return(
                <>    
                <div className='container'>
        <div class="card">
  <img src={values.image} class="card-img-top" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">{values.title}</h5>
    <p class="card-text">{values.description}</p>
    <p class="card-text">Price: {values.price}</p>
  </div>
</div>
        </div>         
                </>
            )
        })}
    </div>
    
  </div>
</div>
    </div>
  )
}

export default Menclothing
