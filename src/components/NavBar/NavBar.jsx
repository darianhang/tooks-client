import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "./NavBar.scss"

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="wrapper">
                <div className="left">
                    <Link className="link" to="/">TOOKS</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">HOME</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/">PRODUCTS</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">ABOUT</Link>
                    </div> 
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <div className="cartIcon">
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar