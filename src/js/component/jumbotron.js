import React from "react";
import "/workspace/exercise-landing-page-with-react/src/styles/index.scss";

export function Jumbotron() {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>

				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to Action!
					</a>
				</p>
			</div>
		</div>
	);
}
