import {Link } from "react-router-dom";
// import mybg from "../Bike-Booking/images/3460583.jpg";

function Register(){

    return(
<div
  style={{
    backgroundImage: `url(${mybg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh"
  }}>
    <title>Bike Booking | Sign In</title>
        <div className="logo-container">
                <div><img src="/Bike-Booking/images/vecteezy_industrial-gears-close-up-factory-product-studio-detail_56819477.png" width="50" height="42"/></div>
                <div><h3 id="Sh1">Bikers Stop</h3></div>
        </div>
        <div className="center-box">
        <div className="main">
            <div>
                <h1>Register</h1>
                <input type="text" name="username" placeholder="Choose username"/>
                <input type="password" name="password" placeholder="Choose password"/>
                <div><button type="submit">Register</button></div>
                <h4>already have an accout?<Link to="/login">Login</Link></h4>
            </div>
        </div>
    </div>
</div>
)
}

export default Register;