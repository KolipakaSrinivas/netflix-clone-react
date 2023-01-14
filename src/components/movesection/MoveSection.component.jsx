import React, { Fragment } from 'react'
import '../movesection/move.style.css'


function MoveSection() {
    return(
        <Fragment>
              <div style={{position: "relative"}}>
    {/* <!-- header --> */}
    <nav className="navbar navbar-expand-lg netflix-navbar netflix-padding-left netflix-padding-right">
      <div className="container-fluid">
        <div className="netflix-row">
          <div className="left d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <img src="./images/logo.png" alt=""/>
            </a>
            <div  className="netflix-nav">
               <section>
                  <button>Home</button>
                  <button>TV Shows</button>
                  <button>Movies</button>
                  <button>News & Popular</button>
                  <button>My List</button>
               </section>
            </div>
            <div className="netflix-dropdown-box dropdown">
              <button className="netflix-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Browse
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Home</a></li>
                <li><a className="dropdown-item" href="#">TV Shows</a></li>
                <li><a className="dropdown-item" href="#">Movies</a></li>
                <li><a className="dropdown-item" href="#">News & Popular</a></li>
                <li><a className="dropdown-item" href="#">My List</a></li>
              </ul>
            </div>
          </div>
          <div className="right d-flex align-items-center">
            <i className="bi bi-search"></i>
            <i className="bi bi-bell-fill"></i>
            <section className="netflix-profile">

            </section>
          </div>
        </div>
      </div>
    </nav>
    {/* <!-- /header --> */}


    {/* <!-- video --> */}
      <div className="">
         <section className="netflix-home-video">
            <div className="top"></div>
            <div className="bottom"></div>
            <video src="./video/video.mp4"  muted loop></video>
            <div className="content">
                <section className="left">
                    <img src="./images/image2.webp" alt=""/>
                
                    <div className="d-flex mt-2">
                      <button className="btn btn-light m-2" > <i className="bi bi-play-fill" style={{color: "black" ,padding: "0%"}}></i> Play Now </button>
                      <button className="btn btn-secondary m-2"><i className="bi bi-info-circle" style={{ padding: "0%"}}></i> More Info</button>
                    </div>
                </section>
               
            </div>
          </section>   
      </div>
      <div className="container footer">
          <div className="row">
            <div className="col-md-10 mx-auto">
                <div className="row">
                  <div className="col-md-3">
                        <ul>
                          <li>Audio and Subtitle</li>
                          <li>Media Center</li>
                          <li>Privacy</li>
                          <li>Contact Us</li>
                        </ul>
                  </div>
                  <div className="col-md-3">
                    <ul>
                      <li>Audio description</li>
                      <li>Investor Relation</li>
                      <li>Terms and Conditions</li>
                      <li>Legal Notices</li>
                    </ul>
              </div>
              <div class="col-md-3">
                <ul>
                  <li>Help Center</li>
                  <li>Jobs</li>
            
                </ul>
               </div>
               <div class="col-md-3">
                <ul>
                  <li>Gift card</li>
                  <li>Subscription</li>
            
                </ul>
               </div>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
               
                <div className="col">
                  <p className="copy-right">@netflix copyright</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

        </Fragment>
    )
}

export default MoveSection