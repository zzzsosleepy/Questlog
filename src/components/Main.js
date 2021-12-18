import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <ul className="navbar-buttons">
                    <li className="navbar-button"></li>
                    <li className="navbar-button"></li>
                </ul>
                <div className="main-content">
                    <div className="main-header">
                        <span>My Task</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;