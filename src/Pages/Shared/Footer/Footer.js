import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
         <div>
            <div className="d-md-flex text-center footer text-white pb-2 pt-2">
                {/* ========== footer course link ========== */}
                <div className="col-md-4 col-12 mt-5 mb-5 ">
                    <h5 className="footer-heading">Categories</h5>
                    <li className="li-style">Travel Bags</li>
                    <li className="li-style">shopping</li>
                    <li className="li-style">Means</li>
                    <li className="li-style">Ladys Bag</li>
                    <li className="li-style">School Bags</li>
                    <li className="li-style">Leather bag</li>

                </div>
                {/* ============footer nav link ============ */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5 className="footer-heading">Visited Product </h5>
                    <li className="li-style ">Ladys Bags</li>
                    <li className="li-style">Ladys Special</li>
                    <li className="li-style">Special Offer</li>
                    <li className="li-style">New collection</li>
                    <li className="li-style">Ass color</li>
                    <li className="li-style">Durable Bag</li>
                </div>
                {/* =========== social media =========== */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5 className="footer-heading">Social Media</h5>
                    <div className="text-info">
                        <i className="fs-2  m-2 fab fa-facebook"></i>
                        <i className="fs-2 m-2 fab fa-google ms-3"></i>
                        <i className="fs-2  m-2 fab fa-twitter ms-3"></i>
                        <h1 className="text-white fw-bold"><NavLink style={{textDecoration:'none'}} to="/home"><span style={{color:"#FFD700"}}>Fashion</span><span style={{color:"#F63E7B"}}>Shop</span> </NavLink></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;