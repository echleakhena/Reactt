import React from 'react';

function Home(props) {
  return (
    <>
    <meta charSet="utf-8" />
    <title>BELTEI International University</title>
    <link rel="icon" type="image/x-icon" href="img/png.png" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="keywords" />
    <meta content="" name="description" />
   
    <div className="container-fluid bg-primary px-5 d-none d-lg-block">
      <div className="row gx-0 align-items-center">
        <div className="col-lg-5 text-center text-lg-start mb-lg-0">
          <div className="d-flex">
            <a href="#" className="text-muted me-4">
              <i className="fas fa-envelope text-secondary me-2" />
              Beltei@gmail.com
            </a>
            <a href="#" className="text-muted me-0">
              <i className="fas fa-phone-alt text-secondary me-2" />
              +01234567890
            </a>
          </div>
        </div>
        <div className="col-lg-3 row-cols-1 text-center mb-2 mb-lg-0">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            <a
              className="btn btn-sm btn-outline-light btn-square rounded-circle me-2"
              href=""
            >
              <i className="fab fa-twitter fw-normal text-secondary" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-square rounded-circle me-2"
              href=""
            >
              <i className="fab fa-facebook-f fw-normal text-secondary" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-square rounded-circle me-2"
              href=""
            >
              <i className="fab fa-linkedin-in fw-normal text-secondary" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-square rounded-circle me-2"
              href=""
            >
              <i className="fab fa-instagram fw-normal text-secondary" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-square rounded-circle"
              href=""
            >
              <i className="fab fa-youtube fw-normal text-secondary" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            <a href="#" className="text-muted me-2">
              {" "}
              Help
            </a>
            <small> / </small>
            <a href="#" className="text-muted mx-2">
              {" "}
              Support
            </a>
            <small> / </small>
            <a href="#" className="text-muted ms-2">
              {" "}
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  
    <div className="container-fluid nav-bar p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
        <a href="" className="navbar-brand p-0">
          <h1 className="display-5 text-secondary m-0">
            <img src="img/beltie.jpg" className="img-fluid" alt="" />
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="/" className="nav-item nav-link active">
              ទំព័រដេីម
            </a>
            <a href="About" className="nav-item nav-link">
              អំពី
            </a>
            <a href="Service" className="nav-item nav-link">
              ការផ្ដល់ជូន
            </a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link" data-bs-toggle="dropdown">
                <span className="dropdown-toggle">ផ្នែកផ្សេងៗ</span>
              </a>
              <div className="dropdown-menu m-0">
                <a href="Feature" className="dropdown-item">
                  ថ្នាក់រៀន
                </a>
                <a href="Countries" className="dropdown-item">
                  សាលសហសិក្សា
                </a>
                <a href="Testimonial" className="dropdown-item">
                  អាហារដ្ឋាន
                </a>
                <a href="Training" className="dropdown-item">
                  បណ្ណាល័យ
                </a>
                <a href="Contact" className="dropdown-item">
                  ផ្សេងៗ...
                </a>
              </div>
            </div>
            <a href="Contact" className="nav-item nav-link">
              ទំនាក់ទំនង
            </a>
          </div>
          <button
            className="btn btn-primary btn-md-square border-secondary mb-3 mb-md-3 mb-lg-0 me-3"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fas fa-search" />
          </button>
          <a
            href=""
            className="btn btn-primary border-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0"
          >
            Get A Quote
          </a>
        </div>
      </nav>
    </div>
    <div className="carousel-header">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to={0}
            className="active"
          />
          <li data-bs-target="#carouselId" data-bs-slide-to={1} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src="img/img6.jpg" className="img-fluid" alt="Image" />
            <div className="carousel-caption">
              <div className="text-center p-4" style={{ maxWidth: 900 }}>
                <h4
                  className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  សកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ
                </h4>
                <h1
                  className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  BELTEI International University
                </h1>
                <p
                  className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
                  data-wow-delay="0.5s"
                ></p>
                <a
                  className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp"
                  data-wow-delay="0.7s"
                  href="contact.html"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/img35.jpg" className="img-fluid" alt="Image" />
            <div className="carousel-caption">
              <div className="text-center p-4" style={{ maxWidth: 900 }}>
                <h5
                  className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  សកលវិទ្យាល័យ ប៊ែលធី អន្តរជាតិ
                </h5>
                <h1
                  className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  BELTEI International University
                </h1>
                <p
                  className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
                  data-wow-delay="0.5s"
                ></p>
                <a
                  className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp"
                  data-wow-delay="0.7s"
                  href="#"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-secondary wow fadeInLeft"
            data-wow-delay="0.2s"
            aria-hidden="false"
          />
          <span className="visually-hidden-focusable">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-secondary wow fadeInRight"
            data-wow-delay="0.2s"
            aria-hidden="false"
          />
          <span className="visually-hidden-focusable">Next</span>
        </button>
      </div>
    </div>
    {/* Carousel End */}
    {/* Modal Search Start */}
    <div
      className="modal fade"
      id="searchModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <h4
              className="modal-title text-secondary mb-0"
              id="exampleModalLabel"
            >
              Search by keyword
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body d-flex align-items-center">
            <div className="input-group w-75 mx-auto d-flex">
              <input
                type="search"
                className="form-control p-3"
                placeholder="keywords"
                aria-describedby="search-icon-1"
              />
              <span id="search-icon-1" className="input-group-text p-3">
                <i className="fa fa-search" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Modal Search End */}
    {/* About Start */}
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
            <div className="bg-light rounded">
              <img
                src="img/img9.jpg"
                className="img-fluid w-100"
                style={{ marginBottom: "-7px" }}
                alt="Image"
              />
              <img
                src="img/img8.jpg"
                className="img-fluid w-100 border-bottom border-5 border-primary"
                style={{ borderTopRightRadius: 300, borderTopLeftRadius: 300 }}
                alt="Image"
              />
            </div>
          </div>
          <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
            <h5 className="sub-title pe-3">
              About BELTEI INTERNATIONAL UNIVERSITY
            </h5>
            <h1 className="display-5 mb-4">
              គុណភាព ប្រសិទ្ធភាព ឧត្ដមភាព សីលធម៌ គុណធម៌
            </h1>
            <p className="mb-4" />
            <div className="row gy-4 align-items-center">
              <div className="col-12 col-sm-6 d-flex align-items-center">
                <i className="fas fa-map-marked-alt fa-3x text-secondary" />
                <h5 className="ms-4">Best Education</h5>
              </div>
              <div className="col-12 col-sm-6 d-flex align-items-center">
                <i className="fas fa-passport fa-3x text-secondary" />
                <h5 className="ms-4">New</h5>
              </div>
              <div className="col-4 col-md-3">
                <div className="bg-light text-center rounded p-3">
                  <div className="mb-2">
                    <i className="fas fa-ticket-alt fa-4x text-primary" />
                  </div>
                  <h1 className="display-5 fw-bold mb-2">32</h1>
                  <p className="text-muted mb-0">Years of Experience</p>
                </div>
              </div>
              <div className="col-8 col-md-9">
                <div className="mb-5">
                  <p className="text-primary h6 mb-3">
                    <i className="fa fa-check-circle text-secondary me-2" />{" "}
                    មានការផ្ដល់ជូនអាហាររូបករណ៏
                  </p>
                  <p className="text-primary h6 mb-3">
                    <i className="fa fa-check-circle text-secondary me-2" />{" "}
                    ការអនុវត្តលឿន និងអាចទុកចិត្តបាន។
                  </p>
                  <p className="text-primary h6 mb-3">
                    <i className="fa fa-check-circle text-secondary me-2" />{" "}
                    គុណភាពល្អបំផុត​ និង មានប្រសិទ្ធភាព
                  </p>
                </div>
                <div className="d-flex flex-wrap">
                  <div
                    id="phone-tada"
                    className="d-flex align-items-center justify-content-center me-4"
                  >
                    <a
                      href=""
                      className="position-relative wow tada"
                      data-wow-delay=".9s"
                    >
                      <i className="fa fa-phone-alt text-primary fa-3x" />
                      <div
                        className="position-absolute"
                        style={{ top: 0, left: 25 }}
                      >
                        <span>
                          <i className="fa fa-comment-dots text-secondary" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <span className="text-primary">
                      សម្រាប់ព័ត៏មាន​បន្ថែមសូមទំនាក់ទំនងមកកាន់
                    </span>
                    <span
                      className="text-secondary fw-bold fs-5"
                      style={{ letterSpacing: 2 }}
                    >
                      Free: +0123 456 7890
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Services Start */}
    <div className="container-fluid service overflow-hidden pt-5">
      <div className="container py-5">
        <div
          className="section-title text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="sub-style">
            <h5 className="sub-title text-primary px-3">Our There</h5>
          </div>
          <h1 className="display-5 mb-4">Good Education and quality</h1>
          <p className="mb-0" />
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="service-inner">
                <div className="service-img">
                  <img
                    src="img/img3.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                </div>
                <div className="service-title">
                  <div className="service-title-name">
                    <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                      <a href="testimonial.html" className="h4 text-white mb-0">
                        Class
                      </a>
                    </div>
                    <a
                      className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4"
                      href="contact.html"
                    >
                      Explore More
                    </a>
                  </div>
                  <div className="service-content pb-4">
                    <a href="testimonial.html">
                      <h4 className="text-white mb-4 py-3">Class</h4>
                    </a>
                    <div className="px-4">
                      <p className="mb-4">
                        Make Comffortable
                        <br /> Good quality
                        <br />
                        Good envirronment
                      </p>
                      <p />
                      <a
                        className="btn btn-primary border-secondary rounded-pill py-3 px-5"
                        href="#"
                      >
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item">
              <div className="service-inner">
                <div className="service-img">
                  <img
                    src="img/img44.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                </div>
                <div className="service-title">
                  <div className="service-title-name">
                    <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                      <a href="contact.html" className="h4 text-white mb-0">
                        Libraries
                      </a>
                    </div>
                    <a
                      className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4"
                      href="contact.html"
                    >
                      Explore More
                    </a>
                  </div>
                  <div className="service-content pb-4">
                    <a href="#">
                      <h4 className="text-white mb-4 py-3">Libraries</h4>
                    </a>
                    <div className="px-4">
                      <p className="mb-4">
                        Make Comffortable
                        <br /> Good quality
                        <br />
                        Good envirronment
                      </p>
                      <p />
                      <a
                        className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                        href="#"
                      >
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item">
              <div className="service-inner">
                <div className="service-img">
                  <img
                    src="img/img15.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                </div>
                <div className="service-title">
                  <div className="service-title-name">
                    <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                      <a href="contact.html" className="h4 text-white mb-0">
                        Restaurants
                      </a>
                    </div>
                    <a
                      className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4"
                      href="testimonial.html"
                    >
                      Explore More
                    </a>
                  </div>
                  <div className="service-content pb-4">
                    <a href="contact.html">
                      <h4 className="text-white mb-4 py-3">Restaurants</h4>
                    </a>
                    <div className="px-4">
                      <p className="mb-4">
                        Make Comffortable
                        <br /> Good quality
                        <br />
                        Good envirronment
                      </p>
                      <p />
                      <a
                        className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                        href="testimonial.html"
                      >
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid training overflow-hidden bg-light py-5">
            <div className="container py-5">
              <div
                className="section-title text-center mb-5 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="sub-style">
                  <h5 className="sub-title text-primary px-3">
                    CHECK OUR Produces
                  </h5>
                </div>
                <h1 className="display-5 mb-4">
                  Get the Best Produces Service sell
                </h1>
                <p className="mb-0" />
              </div>
              <div className="row g-4">
                <div
                  className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="training-item">
                    <div className="training-inner">
                      <img
                        src="img/img10.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                      />
                      <div className="training-title-name">
                        <a href="#" className="h4 text-white mb-0">
                          Libraries
                        </a>
                        <a href="#" className="h4 text-white mb-0" />
                      </div>
                    </div>
                    <div className="training-content bg-secondary rounded-bottom p-4">
                      <a href="#">
                        <h4 className="text-white">Libraries</h4>
                      </a>
                      <p className="text-white-50">
                        Make Comffortable
                        <br /> Good quality
                        <br />
                        Good envirronment
                      </p>
                      <p />
                      <a
                        className="btn btn-secondary rounded-pill text-white p-0"
                        href="#"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="training-item">
                    <div className="training-inner">
                      <img
                        src="img/img21.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                      />
                      <div className="training-title-name">
                        <a href="#" className="h4 text-white mb-0">
                          class
                        </a>
                        <a href="#" className="h4 text-white mb-0" />
                      </div>
                    </div>
                    <div className="training-content bg-secondary rounded-bottom p-4">
                      <a href="#">
                        <h4 className="text-white">class</h4>
                      </a>
                      <p className="text-white-50">
                        Make Comffortable
                        <br /> Good quality
                        <br />
                        Good envirronment
                      </p>
                      <p />
                      <a
                        className="btn btn-secondary rounded-pill text-white p-0"
                        href="#"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="training-item">
                    <div className="training-inner">
                      <img
                        src="img/img20.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                      />
                      <div className="training-title-name">
                        <a href="#" className="h4 text-white mb-0">
                          class
                        </a>
                        <a href="#" className="h4 text-white mb-0" />
                      </div>
                    </div>
                    <div className="training-content bg-secondary rounded-bottom p-4">
                      <a href="#">
                        <h4 className="text-white">class</h4>
                      </a>
                      <p className="text-white-50">
                        Make Comffortable
                        <br /> Good quality
                        <br />
                        Good envirronment
                      </p>
                      <p />
                      <a
                        className="btn btn-secondary rounded-pill text-white p-0"
                        href="#"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="training-item">
                    <div className="training-inner">
                      <img
                        src="img/img19.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                      />
                      <div className="training-title-name">
                        <a href="#" className="h4 text-white mb-0">
                          class
                        </a>
                        <a href="#" className="h4 text-white mb-0" />
                      </div>
                    </div>
                    <div className="training-content bg-secondary rounded-bottom p-4">
                      <a href="#">
                        <h4 className="text-white">class</h4>
                      </a>
                      <p className="text-white-50">
                        Make Comffortable
                        <br /> Good quality
                        <br />
                        Good envirronment
                      </p>
                      <p />
                      <a
                        className="btn btn-secondary rounded-pill text-white p-0"
                        href="#"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <a
                    className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    href="contact.html"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Start */}
          <div
            className="container-fluid footer py-5 wow fadeIn"
            data-wow-delay="0.2s"
          >
            <div className="container py-5">
              <div className="row g-5">
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="footer-item d-flex flex-column">
                    <h4 className="text-secondary mb-4">Contact Info</h4>
                    <a href="">
                      <i className="fa fa-map-marker-alt me-2" />
                      #33B, Borey Chea Ry St. 02, Chaom Chau II, Por Senchey,
                      Phnom Penh City
                    </a>
                    <a href="">
                      <i className="fas fa-envelope me-2" /> info@example.com
                    </a>
                    <a href="">
                      <i className="fas fa-phone me-2" /> +012 345 67890
                    </a>
                    <a href="" className="mb-3">
                      <i className="fas fa-print me-2" /> +012 345 67890
                    </a>
                    <div className="d-flex align-items-center">
                      <i className="fas fa-share fa-2x text-secondary me-2" />
                      <a className="btn mx-1" href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn mx-1" href="">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn mx-1" href="">
                        <i className="fab fa-instagram" />
                      </a>
                      <a className="btn mx-1" href="">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="footer-item d-flex flex-column">
                    <h4 className="text-secondary mb-4">Opening Time</h4>
                    <div className="mb-3">
                      <h6 className="text-muted mb-0">Mon - Friday:</h6>
                      <p className="text-white mb-0">09.00 am to 07.00 pm</p>
                    </div>
                    <div className="mb-3">
                      <h6 className="text-muted mb-0">Satday:</h6>
                      <p className="text-white mb-0">10.00 am to 05.00 pm</p>
                    </div>
                    <div className="mb-3">
                      <h6 className="text-muted mb-0">Vacation:</h6>
                      <p className="text-white mb-0">
                        All Sunday is our vacation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="footer-item d-flex flex-column">
                    <h4 className="text-secondary mb-4">Our Services</h4>
                    <a href="#" className="">
                      <i className="fas fa-angle-right me-2" /> Business
                    </a>
                    <a href="#" className="">
                      <i className="fas fa-angle-right me-2" /> Evaluation
                    </a>
                    <a href="#" className="">
                      <i className="fas fa-angle-right me-2" /> Migrate
                    </a>
                    <a href="#" className="">
                      <i className="fas fa-angle-right me-2" /> Study
                    </a>
                    <a href="#" className="">
                      <i className="fas fa-angle-right me-2" /> Counselling
                    </a>
                    <a href="#" className="">
                      <i className="fas fa-angle-right me-2" /> Work / Career
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="footer-item">
                    <h4 className="text-secondary mb-4">Newsletter</h4>
                    <p className="text-white mb-3">
                      Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="position-relative mx-auto rounded-pill">
                      <input
                        className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                        type="text"
                        placeholder="Enter your email"
                      />
                      <button
                        type="button"
                        className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                      >
                        SignUp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End */}
          {/* JavaScript Libraries */}
          {/* Template Javascript */}
        </div>
      </div>
    </div>
  </>
  
  );
}

export default Home;
