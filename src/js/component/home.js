import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

import "/workspace/react-hello/src/styles/index.scss";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<div className="col-md-12">
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
			<div className="col-sm">
				<Footer />
			</div>
		</div>
	);
}
