import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
const Single = () => {
    const { id } = useParams();
    // console.log(id)

    const [fake, setFake] = useState([])
    // console.log(fake)
    const FakeApi = async()=>{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        // console.log(response)
        const jsonData = await response.json()
        console.log(jsonData)
        setFake(jsonData)
    }
    useEffect(()=>{
        FakeApi();
    },[])


  return (
   <>
     <div className='container'>
        <div class="card">
  <img src={fake.image} class="card-img-top" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">{fake.title}</h5>
    <p class="card-text">{fake.description}</p>
  </div>
</div> 

        </div>
   </>
  )
}

export default Single
