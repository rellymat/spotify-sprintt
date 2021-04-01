import React from 'react';
import { NavLink } from "react-router-dom";

const NavItem = ({path, img, text, currectPath}) => {
    let classes = 'nav_item Rectangle_17'
    classes += currectPath === '/' && text === 'Home' ? ' active' : ''
    return (
        <NavLink className={classes}
            activeClassName="active"
            to={path}>
            <img src={img} className="Vector" alt="" />
            <p className="nav_text"> {text} </p>
        </NavLink>
    );
}

export default NavItem;