import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Section from "../components/section";
import Socbar from "../components/socbar";
import Footer from "../components/footer";
import ColorSelect, { setAccentColor } from "../components/color-select";
import { IoMdGlobe, IoMdCheckboxOutline, IoMdPhonePortrait, IoMdMusicalNotes } from "react-icons/io";

if (typeof window !== "undefined") {
	setAccentColor();
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
}

export default () => (
	<Layout>
		<Helmet>
			<meta charSet="utf-8" />
			<title>Graeme Stewart</title>
			<link rel="canonical" href="https://graemestew.art/" />
		</Helmet>
		<Navbar />
		<ColorSelect />
		<Section
			title="Graeme Stewart"
			id="1"
			header>
			<p>junior web dev./music producer</p>
		</Section>
		<Section
			title="about"
			id="2">
			<p><div><IoMdGlobe class="icon" /></div>I'm a junior web developer familiar with <span class="highlight">HTML/CSS</span>, <span class="highlight">JavaScript</span>, and <span class="highlight">React</span>. I built this website from scratch using these tools.</p>
			<p><div><IoMdCheckboxOutline class="icon" /></div>I'm skilled in <span class="highlight">Java</span> and <span class="highlight">C/C++</span>, and know how to implement web services standards like <span class="highlight">REST</span> and <span class="highlight">SOAP</span>.</p>
			<p><div><IoMdPhonePortrait class="icon" /></div>I have experience building mobile apps with <span class="highlight">React Native</span> and <span class="highlight">Android Studio</span>.</p>
			<p><div><IoMdMusicalNotes class="icon" /></div>I also produce electronic music. My favourite genres to produce are house, techno, ambient, and downtempo.</p>
		</Section>
		<Section
			title="resume"
			id="3">
			<h3>education</h3>
			<p>2009-2012 B.A. in Linguistics, Saint Mary's University</p>
			<p>2018-2020 Cert. in Computers and Information Technology, McGill University</p>
			<h3>work</h3>
			<p>2016-2020 Barista, Cafe Myriade</p>
		</Section>
		<Section
			title="portfolio"
			id="4">
			<div class="portfolio-grid">
				<div class="portfolio-grid-cell">1</div>
				<div class="portfolio-grid-cell">2</div>
				<div class="portfolio-grid-cell">3</div>
				<div class="portfolio-grid-cell">4</div>
				<div class="portfolio-grid-cell">5</div>
				<div class="portfolio-grid-cell">6</div>
			</div>
		</Section>
		<Section
			title="contact"
			id="5">
			<form action="https://getform.io/f/0676626b-76a4-46ee-bb5d-f30a53b9e3fd" method="POST">
				<ul class="contact-list">
					<li class="contact-list-item"><input type="text" name="name" placeholder="Name" /></li>
					<li class="contact-list-item"><input type="email" name="email" placeholder="Email" /></li>
					<li class="contact-list-item"><textarea name="message" placeholder="Message" rows="3" cols="50" /></li>
					<li class="contact-list-item" id="submit"><button type="submit">Send</button></li>
				</ul>
			</form>
			<Footer>&copy; 2020<span class="footer-name"> Graeme Stewart</span></Footer>
		</Section>
		<Socbar />
	</Layout>
)