import { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MainContext } from '../../context/MainProvider';

function WishList() {
  const{wish,deletewish}=useContext(MainContext)
  return (
    <div>
         <HelmetProvider>
    
    <Helmet>
      <title>WishList</title>
      
    </Helmet>
   
 
</HelmetProvider>
<div className="cards">


<div className="data">

{wish.map((x)=><div className="card" key={x.id}>
  <img src={x.img} alt="" />
  <h3>{x.name}</h3>
  <p>{x.desc}</p>
  <h4>${x.price}</h4>
  <button onClick={()=>deletewish(x)}>basket</button>
  





</div>)}
 </div>
 </div>






    </div>
  )
}

export default WishList