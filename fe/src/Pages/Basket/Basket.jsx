import { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MainContext } from '../../context/MainProvider';

function Basket() {
  const {basket,deletebasket}=useContext(MainContext)
  return (
    <div>
        <HelmetProvider>
    
    <Helmet>
      <title>Basket</title>
      
    </Helmet>
   
 
</HelmetProvider>

<div className="cards">


<div className="data">

{basket.map((x)=><div className="card" key={x.id}>
  <img src={x.img} alt="" />
  <h3>{x.name}</h3>
  <p>{x.desc}</p>
  <h4>${x.price}</h4>
  <button onClick={()=>deletebasket(x)}>basket</button>
  





</div>)}
 </div>
 </div>
    </div>
  )
}

export default Basket