import React from "react";
import "/workspace/react-hello/src/styles/index.scss";
import "bootstrap";

const data = {
	image:
		"https://lh3.googleusercontent.com/proxy/5miDw0j1mx3RCWDrMZsuMI-O2TxX4uRFmyyFolccjAGK-Ip7gkZPXbPggEYGSZK1GblxywC1_3V12aduNvepDKveufZU9LlAeWRxD0HyoBCm",
	cardTitle: "Card title",
	cardDescription:
		"Some quick example text to build on the card title and make up the bulk of the cards content.",
	button: {
		url: "#",
		label: "Go to wikipedia"
	}
};

export function Card() {
	return (
		<div className="card">
			<img src={data.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{data.cardTitle}</h5>
				<p className="card-text">{data.cardDescription}</p>
				<a className="btn btn-primary" href={data.button.url}>
					{data.button.label}
				</a>
			</div>
		</div>
	);
}
