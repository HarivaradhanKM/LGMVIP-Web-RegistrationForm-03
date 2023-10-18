import { Component } from "react";
import './index.css'

class Header extends Component {
    render() {
        return (
            <div className="header-bg-container">
                <h1 className="header-heading">Chargee Educational Institutions</h1>
                <p className="header-name">Students Enrollment Form</p>
            </div>
        )
    }
}

export default Header