function Login() {
  return (
    <div
      style={{
        backgroundImage: "url(/Bike-Booking/images/3460583.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <title>Bike Booking | Log In</title>

      <div className="logo-container">
        <div>
          <img src="/Bike-Booking/images/vecteezy_industrial-gears-close-up-factory-product-studio-detail_56819477.jpg" />
          <h3 id="sh1">Bikers Stop</h3>
        </div>
      </div>

      <div className="center-box">{/* login form here */}</div>
    </div>
  );
}

export default Login;
