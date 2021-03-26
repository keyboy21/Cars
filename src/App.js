import "./App.css";
import Bg1 from "./img/1956_chevrolet_bel_air_sport_coupe_96836_1920x1200.webp";
import Bg2 from "./img/bmw_325i_e30_white_auto_93276_1920x1200.webp";
import Bg3 from "./img/bugatti_chiron_side_view_blue_110214_1920x1200.webp";
import Bg4 from "./img/volkswagen_karmann_ghia_side_view_1973_105116_1920x1200.webp";
import Photo1 from "./img/Canada-–-Sports-Car-Sales-Figures.webp";
import Photo2 from "./img/Chevrolet-Corvette.webp";
import Photo3 from "./img/54cb3f0006a9b_-_revved-up-01-0714-lgn.webp";
import Photo4 from "./img/2021-Maserati-MC20-coupe-white-1001x565-1.webp";
import Photo45 from "./img/2014-Ford-Transit-Connect-Wagon-promo.webp";
import Photo46 from "./img/2019-Ford-Mustang-GT-Coupe-Yellow-Peter-Anderson-1200x800p-1_0.webp";
import Photo5 from "./img/honda_odyssey__0037-source.webp";
import Photo6 from "./img/thumb_4970_default_large.webp";
import Photo66 from "./img/thumbnail_Kenzie-2021-Chrysler-Grand-Caravan-SUPP.webp";
import Photo67 from "./img/front-lm-kv-190416-1-2880x1480-1555452460.webp";
import Photo68 from "./img/2014-Ford-Transit-Connect-Wagon-promo.webp";
import Photo7 from "./img/toyota-yaris-rendered-as-a-crossover-looks-like-a-mazda-copy-140274_1.webp";
import Photo8 from "./img/Volkswagen_2020_T-Cross_Life_White_Crossover_591437_1280x853.webp";
import Photo10 from "./img/2021_Chevrolet_TrailBlazer_RS_AWD,_front_7.11.20.webp";
import Photo11 from "./img/seltos2.webp";

function App() {
  return (
    <div className="App">
      <div className="container-fluid" id="main">
        <section
          className="parallax-window tm-section tm-section-home"
          id="home"
          data-parallax="scroll"
          data-image-src={Bg1}
        >
          <div className="tm-page-content-width tm-padding-b">
            <div className="text-center tm-site-title-wrap">
              <h1 className="tm-site-title">Cars-Making life easier</h1>
            </div>
            <div className="tm-textbox tm-white-bg">
              <h2 className="tm-green-text tm-section-title">Welcome!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, dolore! Sunt necessitatibus ullam nostrum repudiandae
                magni ratione consequuntur pariatur consequatur.
              </p>
              <p></p>
              <a href="#services" className="tm-btn">
                Let's Begin
              </a>
            </div>
          </div>
        </section>

        <section
          className="parallax-window tm-section tm-section-services"
          id="services"
          data-parallax="scroll"
          data-image-src={Bg2}
        >
          <div className="tm-page-content-width">
            <div className="tm-translucent-white-bg tm-content-box tm-content-box-right tm-textbox-full-height">
              <div className="tm-content-box-inner">
                <h2 className="tm-section-title tm-blue-text">Our Services</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  odio, incidunt neque iusto alias, atque excepturi eum
                  accusamus in laborum culpa temporibus eaque quod et.
                </p>
                <div className="media tm-media">
                  <i className="fa fa-4x fa-podcast tm-media-icon"></i>
                  <div className="media-body tm-media-body">
                    <p className="tm-small-font">
                      Phasellus tellus arcu, lobortis ut mauris ac, luctus
                      viverra nisl. Integer iaculis sollicitudin ex vel
                      condimentum.
                    </p>
                  </div>
                </div>
                <div className="media tm-media">
                  <i className="fa fa-3x fa-calendar tm-media-icon"></i>
                  <div className="media-body tm-media-body">
                    <p className="tm-small-font">
                      Phasellus tellus arcu, lobortis ut mauris ac, luctus
                      viverra nisl. Integer iaculis sollicitudin ex vel
                      condimentum.
                    </p>
                  </div>
                </div>
                <div className="media tm-media">
                  <i className="fa fa-3x fa-bell-o tm-media-icon"></i>
                  <div className="media-body tm-media-body">
                    <p className="tm-small-font">
                      Phasellus tellus arcu, lobortis ut mauris ac, luctus
                      viverra nisl. Integer iaculis sollicitudin ex vel
                      condimentum.
                    </p>
                  </div>
                </div>
                <a href="#gallery" className="tm-btn">
                  More Info.
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="parallax-window tm-section tm-section-gallery tm-flex"
          id="gallery"
          data-parallax="scroll"
          data-image-src={Bg3}
        >
          <div className="tm-page-content-width tm-flex-col tm-gallery-content">
            <div className="tm-content-box-inner">
              <h2 className="tm-section-title" style={{ color: "white" }}>
                Multi-category gallery
              </h2>
              <div className="iso-section">
                <ul className="filter-wrapper clearfix">
                  <li>
                    <a
                      href="#!"
                      data-filter="*"
                      className="selected opc-main-bg"
                    >
                      Show All
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="opc-main-bg" data-filter=".sport">
                      Sport car
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="opc-main-bg" data-filter=".minivan">
                      Minivan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="opc-main-bg"
                      data-filter=".crossover"
                    >
                      Crossover
                    </a>
                  </li>
                </ul>
              </div>
              <div className="iso-box-section">
                <div className="iso-box-wrapper col4-iso-box">
                  <div className="iso-box sport col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo1}>
                      <img src={Photo1} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box sport col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo2}>
                      <img src={Photo2} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box sport col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo3}>
                      <img src={Photo3} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box sport col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo4}>
                      <img src={Photo4} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box minivan col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo45}>
                      <img src={Photo45} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box sport col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo46}>
                      <img src={Photo46} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box minivan col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo5}>
                      <img src={Photo5} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box minivan col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo6}>
                      <img src={Photo6} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box minivan col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo66}>
                      <img src={Photo66} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box minivan col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo67}>
                      <img src={Photo67} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box minivan col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo68}>
                      <img src={Photo68} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box crossover col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo7}>
                      <img src={Photo7} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box crossover col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo8}>
                      <img src={Photo8} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box  crossover col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo10}>
                      <img src={Photo10} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="iso-box  crossover col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                    <a href={Photo11}>
                      <img src={Photo11} alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="parallax-window tm-section tm-section-contact"
          id="contact"
          data-parallax="scroll"
          data-image-src={Bg4}
        >
          <div className="tm-page-content-width">
            <div className="tm-translucent-white-bg tm-textbox tm-content-box tm-textbox-full-height">
              <h2 className="tm-section-title tm-red-text">Contact Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                corporis suscipit laudantium libero vero dolorem.
              </p>

              <form
                action="index.html"
                method="post"
                className="tm-contact-form"
              >
                <div className="form-group">
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="contact_email"
                    name="contact_email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    id="contact_message"
                    name="contact_message"
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="tm-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="tm-copyright-div">
            <p className="tm-copyright-text">
              Copyright &copy; <span className="tm-current-year">2020</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
