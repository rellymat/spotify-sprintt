import React from 'react';
import { NavLink } from "react-router-dom";

const NavItem = ({item}) => {
    const {path, img, text} = item
    const classes = 'rowC Rectangle_17 '
    return (
        <NavLink className={classes}
            activeClassName="active"
            exact to={path}>
            <img src={img} className="Vector" alt="" />
            <p className="nav_text"> {text} </p>
        </NavLink>
    );
}

export default NavItem;