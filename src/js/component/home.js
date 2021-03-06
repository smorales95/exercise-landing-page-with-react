import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

import "/workspace/exercise-landing-page-with-react/src/styles/index.scss";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<div className="anch">
				<Navbar />
			</div>
			<div className="row justify-content-center">
				<div className="col-sm-11 contenedor">
					<Jumbotron />
				</div>

				<div className=" row carcon">
					<div className="col-sm">
						<Card />
					</div>
					<div className="col-sm">
						<Card />
					</div>
					<div className="col-sm">
						<Card />
					</div>
					<div className="col-sm">
						<Card />
					</div>
				</div>
			</div>
			<div className="col-sm anch">
				<Footer />
			</div>
		</div>
	);
}
