import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Todd's React</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/pokemon">Pokemon</Link>
                            <Link className="nav-link" to="/todo">Todo</Link>
                            <a className="nav-link" href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
