import React from 'react'
import { NavLink } from 'react-router-dom';
import './nav.scss'

export class NavComponent extends React.Component {

    render() {
        return (
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink exact activeClassName="active" to="/projects">Projects</NavLink></li>
                    <li className="nav-item"><NavLink exact activeClassName="active" to="/education">Education</NavLink></li>
                    {/* <li className="nav-item"><NavLink exact activeClassName="active" to="/publications">Publication</NavLink></li> */}
                    <li className="nav-item"><NavLink exact activeClassName="active" to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        );
    }
}
