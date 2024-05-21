import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import "./Detail.scss"

function Detail() {
  const { id } = useParams();
  const [detail, setdetail] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setdetail(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>Detail</title>
      </Helmet>

      <table >
  <tr>
    <th>image</th>
    <th>name</th> 
    <th>desc</th>
    <th>price</th>
    <th>options</th>
    
  </tr>
  <tr>
    <td><img src={detail.img} alt="" /></td>
    <td> {detail.name}</td>
    <td>{detail.desc}</td>
    <td>${detail.price}</td>
  </tr>
  </table>

      
      
    </>
  );
}

export default Detail;
