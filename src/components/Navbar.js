import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-buttons">
                    <li className="navbar-button"></li>
                    <li className="navbar-button"></li>
                </ul>
                <div className="navbar-content">
                    <div className="navbar-header">
                        <span><i class="fas fa-calendar-alt"></i> Projects</span>
                    </div>
                    <ul className="nav-links">
                        <li className="nav-link"><a href="www.jeffreychipman.com"><span><i class="fas fa-clipboard"></i> Dashboard</span></a></li>
                        <li className="nav-link nav-selected"><a href="www.jeffreychipman.com"><span><i class="fas fa-check-double"></i> My Task</span></a></li>
                        <li className="nav-link"><a href="www.jeffreychipman.com" ><span><i class="fas fa-calendar-check"></i> Calendar</span></a></li>
                        <li className="nav-link"><a href="www.jeffreychipman.com"><span><i class="fas fa-cog"></i> Settings</span></a></li>
                        <li className="nav-link"><a href="www.jeffreychipman.com"><span><i class="fas fa-comment-alt"></i> Inbox</span></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;