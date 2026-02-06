import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { motion } from "framer-motion";


function Homepage(){
    return(
        <>
        <title>Bike Spot | Homepage</title>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{position:"fixed", zIndex:1050, boxShadow:0}}>
        <div class="container-fluid">
                <div><img src="/Bike-Booking/images/vecteezy_industrial-gears-close-up-factory-product-studio-detail_56819477.png" width="50" height="42"/></div>
                <div><h3 id="Sh1">Bikers Stop</h3></div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div style={{marginLeft:950}}>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form></div>
            
            <div><button className="signin001"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
</svg></button></div>
            </div>
            
        </div>
        </nav>
            <div id="carouselExample" class="carousel slide" >
            <div class="carousel-inner">
                <div class="carousel-item" style={{width:1200,height:450, marginLeft:150}}>
                <img src="../Bike-Booking/images/bajaj-pulsar-ns-200-next-level-of-perforamance-biking-pulsar-aur-avenger-models-par-visesh-tyohar-offer-ad-dainik-jagran-agra-13-10-2017.png" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item active" style={{width:1200,height:450, marginLeft:150}}>
                <img src="../Bike-Booking/images/20240903114449_Jawa-42FJ.avif" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item" style={{width:1200,height:450, marginLeft:150}}>
                <img src="../Bike-Booking/images/bike-sale-ads-promotional-banner-template-design_1033790-9958.avif" class="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>

<div class="total">
                <h4 style={{
                    textAlign:"Left",
                    marginTop:20,
                }}>Top Selling Models :</h4> 

            <div style={{
                display:"flex",
                flexDirection: "row",
                justifyContent:"center"
            }}>
            <motion.div class="card" style={{
                width:300,
                marginTop:10
            }} whileHover={{ scale: 1.05 }}>
            <img src="../Bike-Booking/images/pulsar-ns-right-side-view-11.webp" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Bajaj Pulsar NS 200</h5>
                <div style={{display:"flex",flexDirection:"row"}}><h3 class="card-text">₹ 1,81,129</h3><h6 style={{margin:10}}>Onwords</h6></div>
                <div class="priceh6"><h6>Avg. Ex-Showroom price</h6></div>
                <a href="#" class="btn btn-primary">Specification</a>
            </div>
            </motion.div>

            <motion.div class="card" style={{
                width:300,
                marginTop:10,
                marginLeft:20
            }} whileHover={{ scale: 1.05 }}>
            <img src="../Bike-Booking/images/pulsar-ns-right-side-view-14.webp" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div style={{display:"flex",flexDirection:"row"}}><h3 class="card-text">₹ 1,81,129</h3><h6 style={{margin:10}}>Onwords</h6></div>
                <div class="priceh6"><h6>Avg. Ex-Showroom price</h6></div>
                <a href="#" class="btn btn-primary">Specification</a>
            </div>
            </motion.div>
            <motion.div class="card" style={{
                width:300,
                marginTop:10,
                marginLeft:20
            }} whileHover={{ scale: 1.05 }}>
            <img src="../Bike-Booking/images/160-duke-right-side-view-14.avif" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div style={{display:"flex",flexDirection:"row"}}><h3 class="card-text">₹ 1,81,129</h3><h6 style={{margin:10}}>Onwords</h6></div>
                <div class="priceh6"><h6>Avg. Ex-Showroom price</h6></div>
                <a href="#" class="btn btn-primary">Specification</a>
            </div>
            </motion.div>
            <motion.div class="card" style={{
                width:300,
                marginTop:10,
                marginLeft:20
            }} whileHover={{ scale: 1.05 }}>
            <img src="../Bike-Booking/images/bajaj-pulsar-125-neon-single-seat1749479850631.avif" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div style={{display:"flex",flexDirection:"row"}}><h3 class="card-text">₹ 1,81,129</h3><h6 style={{margin:10}}>Onwords</h6></div>
                <div class="priceh6"><h6>Avg. Ex-Showroom price</h6></div>
                <a href="#" class="btn btn-primary">Specification</a>
            </div>
            </motion.div>
            </div>

            <h4 style={{
                    textAlign:"Left",
                    marginTop:20
                }}>Get Offers on Popular Bikes:</h4> 

            <div style={{
                display:"flex",
                flexDirection: "row",
                justifyContent:"center"
            }}>
            <motion.div class="card" style={{
                width:250,
                height:270,
                marginTop:20,
            }} whileHover={{ borderColor:"blue" }}>
            <img src="../Bike-Booking/images/pulsar-ns-right-side-view-11.webp" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Bajaj Pulsar NS 200</h5>
                <div style={{display:"flex",flexDirection:"row"}}><h5 class="card-text">₹ 1,81,129  </h5><h6 style={{margin:3,marginLeft:8}}>Onwords</h6></div>
                <a href="" class="offer-ancher">Get Best Offer</a>
            </div>
            </motion.div>

            <motion.div class="card" style={{
                width:250,
                height:270,
                marginTop:20,
                marginLeft:20
            }} whileHover={{ borderColor:"blue" }}>
            <img src="../Bike-Booking/images/pulsar-ns-right-side-view-11.webp" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Bajaj Pulsar NS 200</h5>
                <div style={{display:"flex",flexDirection:"row"}}><h5 class="card-text">₹ 1,81,129  </h5><h6 style={{margin:3,marginLeft:8}}>Onwords</h6></div>
                <a href="" class="offer-ancher">Get Best Offer</a>
            </div>
            </motion.div>

            <motion.div class="card" style={{
                width:250,
                height:270,
                marginTop:20,
                marginLeft:20
            }} whileHover={{ borderColor:"blue" }}>
            <img src="../Bike-Booking/images/pulsar-ns-right-side-view-11.webp" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Bajaj Pulsar NS 200</h5>
                <div style={{display:"flex",flexDirection:"row"}}><h5 class="card-text">₹ 1,81,129  </h5><h6 style={{margin:3,marginLeft:8}}>Onwords</h6></div>
                <a href="" class="offer-ancher">Get Best Offer</a>
            </div>
            </motion.div>

            <motion.div class="card" style={{
                width:250,
                height:270,
                marginTop:20,
                marginLeft:20
            }} whileHover={{ borderColor:"blue" }}>
            <img src="../Bike-Booking/images/pulsar-ns-right-side-view-11.webp" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Bajaj Pulsar NS 200</h5>
                <div style={{display:"flex",flexDirection:"row"}}><h5 class="card-text">₹ 1,81,129  </h5><h6 style={{margin:3,marginLeft:8}}>Onwords</h6></div>
                <a href="" class="offer-ancher">Get Best Offer</a>
            </div>
            </motion.div>

            <motion.div class="card" style={{
                width:250,
                height:270,
                marginTop:20,
                marginLeft:20
            }} whileHover={{ borderColor:"blue" }}>
            <img src="../Bike-Booking/images/pulsar-ns-right-side-view-11.webp" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Bajaj Pulsar NS 200</h5>
                <div style={{display:"flex",flexDirection:"row"}}><h5 class="card-text">₹ 1,81,129  </h5><h6 style={{margin:3,marginLeft:8}}>Onwords</h6></div>
                <a href="" class="offer-ancher">Get Best Offer</a>
            </div>
            </motion.div>

            </div>

            <div class="Brandname001">
           <div class="container text-center">
            <div class="row row-cols-4">
                <div class="col"><img src="../Bike-Booking/images/royal-enfield-brand.avif" style={{width:120}}></img><h6>Royal Enfield</h6></div>
                <div class="col"><img src="../Bike-Booking/images/tvs-brand.avif" style={{width:120}}></img><h6>TVS</h6></div>
                <div class="col"><img src="../Bike-Booking/images/bajaj-brand.avif" style={{width:120}}></img><h6>Bajaj</h6></div>
                <div class="col"><img src="../Bike-Booking/images/yamaha-brand.avif" style={{width:120}}></img><h6>Yamaha</h6></div>
            </div>
            </div>
            <div class="container text-center">
            <div class="row row-cols-4">
                <div class="col"><img src="../Bike-Booking/images/hero-brand.avif" style={{width:120}}></img><h6>Hero</h6></div>
                <div class="col"><img src="../Bike-Booking/images/ktm-brand.avif" style={{width:120}}></img><h6>KTM</h6></div>
                <div class="col"><img src="../Bike-Booking/images/kawasaki-brand.avif" style={{width:120}}></img><h6>Kawasaki</h6></div>
                <div class="col"><img src="../Bike-Booking/images/triumph-brand.avif" style={{width:120}}></img><h6>Triumph</h6></div>
            </div>
            </div>
            </div>

</div>
        </>
    );
}
export default Homepage;