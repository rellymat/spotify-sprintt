import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { PlayerContext } from '../player';

const NavItem = ({ item }) => {
    const { path, img, text } = item
    const { path: currentPath, setPath } = useContext(PlayerContext)

    const getClasses = () => {
        const classes = 'rowC Rectangle_17'
        if (text === 'Home') {
            if (currentPath !== '/browse' && currentPath !== '/liked_songs')
                return classes + ' active'
        }
        return classes
    }

    const click = () => {
        setPath(path)
    }

    return (
        <NavLink className={getClasses()}
            onClick={click}
            exact to={path}
        >
            <img src={img} className="Vector" alt="" />
            <p className="nav_text"> {text} </p>
        </NavLink>
    );
}

export default NavItem;