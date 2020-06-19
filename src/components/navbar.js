import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			active1: false,
			active2: false,
			active3: false,
			active4: false,
			active5: false
		}
	}

	render() {
		return (
			<nav className="nav" id="navbar">
				<div className="nav-content">
					<ul className="nav-items">
						<li className="nav-item">
							<Link
								className={this.state.active1 ? "nav-link active" : "nav-link"}
								activeClass={this.state.clicked ? "nav-link" : "nav-link active"}
								to="1"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								tabIndex={0}
								onClick={() => {
									this.setState({ clicked: true, active1: true });
									setTimeout(() => this.setState({ clicked: false, active1: false }), 1000);
								}}>
								home
              				</Link>
						</li>
						<li className="nav-item">
							<Link
								className={this.state.active2 ? "nav-link active" : "nav-link"}
								activeClass={this.state.clicked ? "nav-link" : "nav-link active"}
								to="2"
								spy={true}
								smooth={true}
								offset={1}
								duration={500}
								tabIndex={0}
								onClick={() => {
									this.setState({ clicked: true, active2: true });
									setTimeout(() => this.setState({ clicked: false, active2: false }), 1000);
								}}>
								about
              				</Link>
						</li>
						<li className="nav-item">
							<Link
								className={this.state.active3 ? "nav-link active" : "nav-link"}
								activeClass={this.state.clicked ? "nav-link" : "nav-link active"}
								to="3"
								spy={true}
								smooth={true}
								offset={-1}
								duration={500}
								tabIndex={0}
								onClick={() => {
									this.setState({ clicked: true, active3: true });
									setTimeout(() => this.setState({ clicked: false, active3: false }), 1000);
								}}>
								resume
              				</Link>
						</li>
						<li className="nav-item">
							<Link
								className={this.state.active4 ? "nav-link active" : "nav-link"}
								activeClass={this.state.clicked ? "nav-link" : "nav-link active"}
								to="4"
								spy={true}
								smooth={true}
								offset={-1}
								duration={500}
								tabIndex={0}
								onClick={() => {
									this.setState({ clicked: true, active4: true });
									setTimeout(() => this.setState({ clicked: false, active4: false }), 1000);
								}}>
								portfolio
              				</Link>
						</li>
						<li className="nav-item">
							<Link
								className={this.state.active5 ? "nav-link active hover-fade-opacity" : "nav-link hover-fade-opacity"}
								activeClass={this.state.clicked ? "nav-link hover-fade-opacity" : "nav-link active hover-fade-opacity"}
								to="5"
								spy={true}
								smooth={true}
								offset={-1}
								duration={500}
								tabIndex={0}
								onClick={() => {
									this.setState({ clicked: true, active5: true });
									setTimeout(() => this.setState({ clicked: false, active5: false }), 1000);
								}}>
								contact
              				</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
