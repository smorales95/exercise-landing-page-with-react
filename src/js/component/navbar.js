//import react into the bundle
import React from "react";
import "/workspace/exercise-landing-page-with-react/src/styles/index.scss";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle

//import your own components

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark anch">
			<div className="mx-auto order-2">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target=".dual-collapse2">
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>
			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link text-light" href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" href="#">
							Service
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
