import { Link } from "react-router-dom"
import "./Nav.scss"
import { useContext } from "react"
import { MainContext } from "../context/MainProvider"
function Nav() {
  const {basket}=useContext(MainContext)
  return (
    <div className="nav1">
    <div className="nav">
        <div className="basliq">
          <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
            <h1>COURSE</h1>
        </div>

        <div className="links">

        <Link to={"/"}>Home</Link>
        <Link to={"/Basket"}>Basket {basket.length ? basket.length : null}</Link>
        <Link to={"/Add"}>Add</Link>
        <Link to={"/WishList"}>WishList</Link>
        <Link to={"/Admin"}>Admin</Link>

      
        </div>

        <div className="elaqe">
        <i className="fa-solid fa-phone-volume"></i>
        <p>+43 4566 7788 2457</p>
        </div>
    </div>

    </div>
  )
}

export default Nav