import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import image1 from '../IMAGES/logo_dataia.png';
import image2 from '../IMAGES/logo_datascience_initiative.png';
import image3 from '../IMAGES/logo_lix.png';
import image4 from '../IMAGES/logo_stresstest.png';

function Home() {
  return (
    <div>
      <Header />

      <section className="w3l-main-slider" id="home">
        <div className="companies20-content">
          <section className="w3l-clients py-5" id="clients">
            <div className="call-w3 py-md-4 py-2">
              <div className="container">
                <div className="company-logos text-center">
                  <div className="row logos">
                  <div className="col-lg-3 col-md-3 col-6 mt-lg-0 mt-4">
                  <a href={"https://www.polytechnique.edu/en"} target="_blank" rel="noopener noreferrer">
                      <img src={image3} style={{ opacity: "1", maxWidth: "100%", height: "auto" }} alt="" className="img-fluid" />
                    </a>
                      </div>
                    <div className="col-lg-3 col-md-3 col-6 mt-md-0 mt-4">
                    <a href={"https://portail.polytechnique.edu/datascience/en"} target="_blank" rel="noopener noreferrer">
                      <img src={image2} style={{ opacity: "1", maxWidth: "100%", height: "auto" }} alt="" className="img-fluid" />
                      </a>
                    </div>
                   
                    <div className="col-lg-3 col-md-3 col-6">
                    <a href={"http://dataia.eu/"} target="_blank" rel="noopener noreferrer">
                      <img src={image1} style={{ opacity: "1", maxWidth: "100%", height: "auto" }} alt="" className="img-fluid" />
                    </a>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6 mt-lg-0 mt-4">
                    <a href={"http://www.cmap.polytechnique.fr/~stresstest/"} target="_blank" rel="noopener noreferrer">
                      <img src={image4} style={{ opacity: "1", maxWidth: "100%", height: "auto" , marginTop: "50px"}} alt="" className="img-fluid" />
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="owl-one owl-carousel owl-theme">
            <div className="item">
              <li>
                <div className="slider-info banner-view bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>Monday, January 4 Saturday, January 9, 2021</h5>
                        <p className="mt-4 pr-lg-4">VIRTUAL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
        <div className="waveWrapper waveAnimation">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none' }}></path>
          </svg>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
