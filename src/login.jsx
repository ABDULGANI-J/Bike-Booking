import { Link } from "react-router-dom";
import mybg from "../Bike-Booking/images/3460583.jpg";

function Login(){
    

    return(
        <div
  style={{
    backgroundImage: `url(${mybg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh"
  }}>
        <title>Bike Booking | Log In</title>
                <div className="logo-container">
                <div><img src="/Bike-Booking/images/vecteezy_industrial-gears-close-up-factory-product-studio-detail_56819477.png" width="50" height="42"/></div>
                <div><h3 id="Sh1">Bikers Stop</h3></div>
        </div>
        <div className="center-box">
                
        </div>
        </div>
    )
}

export default Login;