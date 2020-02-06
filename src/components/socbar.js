import React, { Component } from "react";
import { IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

export default class Socbar extends Component {
    render() {
        return (
            <nav className="soc" id="socbar">
                <div className="soc-content">
                    <ul className="soc-items">
                        <li className="soc-item">
                            <a
                                className="soc-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://twitter.com/graemedstewart"
                                tabIndex={0}>
                                <IoLogoTwitter />
                            </a>
                        </li>
                        <li className="soc-item">
                            <a
                                className="soc-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/graeme-stewart-b061401a2"
                                tabIndex={0}>
                                <IoLogoLinkedin />
                            </a>
                        </li>
                        <li className="soc-item">

                        </li>
                        <li className="soc-item">

                        </li>
                        <li className="soc-item">

                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
