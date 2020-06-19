import React, { Component } from "react";
import { Link } from "react-scroll";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default class MobileNav extends Component {
    constructor(props) {
        super(props);
        this.listener = (e) => { e.preventDefault(); };
        this.state = {
            visible: false
        }
    }

    _toggleMenu() {
        if (!this.state.visible) {
            this.setState({
                visible: true
            });
            document.addEventListener("touchmove", this.listener, { passive: false });
        } else {
            this.setState({
                visible: false
            });
            document.removeEventListener("touchmove", this.listener);
        }
    }

    render() {
        return (
            <div>
                <div
                    className="mobile-nav"
                    role="button"
                    tabIndex={0}
                    onClick={() => this._toggleMenu()}
                    onKeyDown={() => this._toggleMenu()}>
                    {!this.state.visible ? <IoMdMenu /> : <IoMdClose />}
                </div>
                {!this.state.visible ?
                    null :
                    <div className="mobile-nav-overlay">
                        <div className="mobile-nav-item">
                            <Link
                                className="mobile-nav-link"
                                to="1"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                tabIndex={0}
                                onClick={() => this._toggleMenu()}>
                                home
              				</Link>
                        </div>
                        <div className="mobile-nav-item">
                            <Link
                                className="mobile-nav-link"
                                to="2"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                tabIndex={0}
                                onClick={() => this._toggleMenu()}>
                                about
              				</Link>
                        </div>
                        <div className="mobile-nav-item">
                            <Link
                                className="mobile-nav-link"
                                to="3"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                tabIndex={0}
                                onClick={() => this._toggleMenu()}>
                                resume
              				</Link>
                        </div>
                        <div className="mobile-nav-item">
                            <Link
                                className="mobile-nav-link"
                                to="4"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                tabIndex={0}
                                onClick={() => this._toggleMenu()}>
                                portfolio
              				</Link>
                        </div>
                        <div className="mobile-nav-item">
                            <Link
                                className="mobile-nav-link"
                                to="5"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                tabIndex={0}
                                onClick={() => this._toggleMenu()}>
                                contact
              				</Link>
                        </div>
                    </div>}
            </div>
        )
    }
}