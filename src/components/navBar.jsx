import React, { Component } from "react";
import home from "../assets/home_icon.png"
import browse from "../assets/browse_icon.png"
import liked from "../assets/liked_songs_icon.png"
import NavItem from "./commons/navItem";



class NavBar extends Component {
    state = {
        nav_items: [
            {
                path: '/',
                img: home,
                text: 'Home'
            },
            {
                path: '/browse',
                img: browse,
                text: 'Browse'
            },
            {
                path: '/liked_songs',
                img: liked,
                text: 'Liked songs'
            }
        ]
    }

    render() {
        return (
            <nav className="navbar">
                <div className="Frame_9">
                    <div className="sprintt" />
                </div>
                <div className="nav_menu">
                    {this.state.nav_items.map((item, index) => {
                        return (
                            <NavItem key={index} item={item} />
                        )
                    })}
                </div>
            </nav>
        );
    }
}

export default NavBar;
