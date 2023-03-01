import React from "react";
import "./Categories.scss"
import { Link } from "react-router-dom";

const images = [
    "https://res.cloudinary.com/df5etts2d/image/upload/v1669859461/tooks/R5075COZYCHUNKYBEANIE2_1080x1080_igrpom.webp",
    "https://res.cloudinary.com/df5etts2d/image/upload/v1669859460/tooks/DSC4169_1080x1080_rl00g2.webp",
    "https://res.cloudinary.com/df5etts2d/image/upload/v1669859559/tooks/R5021COTTONROLLUPBEANIE_R5073REVERSIBLECHUNKYMUFFLER_1080x1080_noryew.webp"
]

const Categories = () => {
    return (
        <div className="categories-wrapper">
                <Link className="category-container" to="/products/1">
                    <img className="category-thumbnail" src={images[0]}></img>
                    <span>Hats</span>         
                </Link>
            <Link className="category-container" to="/products/2">
                <img className="category-thumbnail" src={images[1]}></img>
                <span>Socks</span>
            </Link>
            <Link className="category-container" to="/products/3">
                <img className="category-thumbnail" src={images[2]}></img>
                <span>Scarves</span>
            </Link>
        </div>
    )
}

export default Categories