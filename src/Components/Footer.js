import React from 'react';
import './Styles.css'

const Footer = () => {
    return (
        <footer id="main-footer">
            <div className="container">
                <div className="row ">
                <hr />
                    <div className="col-6 col-sm-7">
                     <nav>
                         <ul id="menu-footer-menu ">
                             <li id="menu-item"> <a className="logo" href="/">DevApp Agency</a></li>
                             <li id="menu-item">Services</li>
                             <li id="menu-item">About</li>
                             <li id="menu-item">Contact</li>
                         </ul>
                     </nav>
                 </div>
                    <div className="footer">
                        <h2 className="h3 ">
                            Want To Partner
                         <br />
                         With Us?

                         <a className="button" href="/">Contact Us</a>
                        </h2>

                    </div>
                </div>
                <div>

                </div>
                <div className="second-footer">
                    <div className="container">
                        <div className="row">


                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm">
                                &copy;{new Date().getFullYear()} Anime Fund | All rights reserved |
       Terms Of Service | Privacy
     </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
