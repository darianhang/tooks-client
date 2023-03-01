import React from "react";
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <span className="footer-section-name">Help & Info</span>
                <ul>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>Shipping</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className="footer-center">
                <span className="footer-section-name">About Us</span>
                <ul>
                    <li>Tooks</li>
                    <li>Events</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className="footer-right">
                <span className="footer-section-name">Let's be friends</span>
                <input className="contact-input" type="text" placeholder="your@email.com"></input>
            </div>
        </div>
    )
}

export default Footer