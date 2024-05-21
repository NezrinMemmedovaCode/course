import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

function Admin() {
  const [admin, setadmin] = useState([])
  useEffect(() => {

    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => setadmin(data));


  
  }, [])
  function deleteadmin(id) {
    fetch("http://localhost:3000/product/" +id,{
      method:"delete"
    })
    .then(res=>res.json())
    .then(data=>setadmin([...admin.filter((x)=>x._id!==data._id)]))
    

    
  }
  







  return (
    <div>   
    <Helmet>
      <title>Admin</title>      
    </Helmet>



    <div className='admin'>
    <table>
  <tr>
    <th>image</th>
    <th>name</th> 
    <th>description</th>
    <th>price</th>
    <th></th>
  </tr>
  </table>

      {admin.map((x)=> <tr key={x.id}>
        <td><img src={x.img} alt="" /></td>
    <td>{x.name}</td>
    <td>{x.desc}</td>
    <td>{x.price}</td>
    <td><button onClick={()=>deleteadmin(x._id)}>delete</button></td>


      </tr>
  



    )}


    </div>
</div>
  )
}

export default Admin