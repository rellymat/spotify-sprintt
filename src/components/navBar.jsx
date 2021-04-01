import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import home from "../assets/home_icon.png"
import browse from "../assets/browse_icon.png"
import liked from "../assets/liked_songs_icon.png"
import { withRouter } from "react-router";



class NavBar extends Component {

    getRectangle = path => {
        switch (path) {
            case '/browse':
                return 'Rectangle_18';
            case '/liked_songs':
                return 'Rectangle_19';
            default:
                return 'Rectangle_17';
        }
    }


    render() {
        const rectangle = this.getRectangle(this.props.location.pathname)
        return (
            <nav className="navbar navbar-expand wrapper">
                <div className="Frame_9">
                    <div className="sprintt" />
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className={rectangle}></div>
                        <NavLink className="nav_item"
                            to="/home">
                            <img src={home} className="Vector" alt="" />
                            <p className="Home"> Home </p>
                        </NavLink>
                        <NavLink className="nav_item"
                            to="/browse">
                            <img src={browse} className="Vector1" alt="" />
                            <p className="Browse"> Browse </p>
                        </NavLink>
                        <NavLink className="nav_item"
                            to="/liked_songs">
                            <img src={liked} className="Ellipse" alt="" />
                            <p className="Liked_songs"> Liked songs </p>
                        </NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavBar);
