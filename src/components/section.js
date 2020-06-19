import React from "react";

export default function Section({ id, title, header, tall, last, children }) {
	if (header) {
		return (
			<div className="header" id={id}>
				<h1>{title}</h1>
				{children}
			</div>
		);
	} else
		return (
			<div className={last ? "section last" : tall ? "section tall" : "section"} id={id}>
				<h2>{title}</h2>
				{children}
			</div>
		);
}
