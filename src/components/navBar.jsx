import React, { Component } from "react";
import home from "../assets/home_icon.png"
import browse from "../assets/browse_icon.png"
import liked from "../assets/liked_songs_icon.png"
import { withRouter } from "react-router";
import NavItem from "./commons/navItem";



class NavBar extends Component {
    state = {
        nav_items: [
            {
                path: '/home',
                img: home,
                text: 'Home'
            },
            {
                path: '/browse',
                img: browse,
                text: 'Browse'
            },
            {
                path: '/liked',
                img: liked,
                text: 'Liked songs'
            }
        ]
    }

    render() {
        const currectPath = this.props.location.pathname;
        return (
            <nav className="navbar">
                <div className="Frame_9">
                    <div className="sprintt" />
                </div>
                <div className="nav_menu">
                    {this.state.nav_items.map((item, index) => {
                        return (
                            <NavItem key={index} path={item.path} img={item.img} text={item.text} currectPath={currectPath}/>
                        )
                    })}
                </div>
            </nav>
        );
    }
}

export default withRouter(NavBar);
