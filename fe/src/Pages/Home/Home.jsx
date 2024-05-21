import { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Home.scss"
import { MainContext } from "../../context/MainProvider";
import { Link } from "react-router-dom";

function Home() {
  const [product, setproduct] = useState([]);
  const {addbasket,addwish}=useContext(MainContext)
  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>
      <div className="home1">
        <div className="yazi">
          <h1>Get your</h1>
          <h1 className="yellow">Education</h1>
          <h1>today</h1>
        </div>
      
        

      </div>
      



      <div className="cards">
        <h1>Popular Courses</h1>

   <div className="data">

  {product.map((x)=><div className="card" key={x.id}>

    <Link to={`/Detail/${x._id}`}>
    <img src={x.img} alt="" />
    </Link>
    <h3>{x.name}</h3>
    <p>{x.desc}</p>
    <h4>${x.price}</h4>
    <button onClick={()=>addbasket(x)}>basket</button>
    <button onClick={()=>addwish(x)}>wish</button>





  </div>)}
   </div>

      </div>

      <div className="home34">

      <div className="home3">
        <div className="yazi3">

        <h1>Register now and get a discount 50% discount until 1 January</h1>
        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
        <button>REGISTER NOW</button>
          
        </div>
      </div>
      <div className="home4">
        
       <h1>Search for your course</h1>
       <input type="text" placeholder="Course Name" />
       <input type="text" placeholder="Category " />
       <input type="text" placeholder="Degree " />
       <button>Search Course</button>

      </div>
      </div>










    </div>
  );
}

export default Home;
