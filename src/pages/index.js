import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import MobileNav from "../components/mobile-nav";
import Section from "../components/section";
import Socbar from "../components/socbar";
import Footer from "../components/footer";
import AccentSelect, { setAccentColor } from "../components/accent-select";
import ThemeSelect, { setThemeColor } from "../components/theme-select";
import { IoMdGlobe, IoMdCheckboxOutline, IoMdPhonePortrait, IoMdMusicalNotes, IoLogoGithub, IoLogoYoutube } from "react-icons/io";
import { FaGooglePlay, FaBandcamp } from "react-icons/fa";

if (typeof window !== "undefined") {
	setAccentColor();
	setThemeColor();
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
		<MobileNav />
		<div className="custom-bar">
			<ThemeSelect />
			<AccentSelect />
		</div>
		<Section
			title="Graeme Stewart"
			id="1"
			header>
			<p>junior web dev./music producer</p>
		</Section>
		<Section
			title="about"
			id="2">
			<p><div><IoMdGlobe class="icon" /></div>I'm a junior web developer based in Montréal familiar with <span class="highlight">HTML/CSS</span>, <span class="highlight">JavaScript</span>, and <span class="highlight">React</span> (including <span class="highlight">Gatsby</span> and <span class="highlight">Next.JS</span>). I built this website from scratch using some of these tools.</p>
			<p><div><IoMdCheckboxOutline class="icon" /></div>I'm skilled in <span class="highlight">Java</span> and <span class="highlight">C/C++</span>, and know how to implement web services standards like <span class="highlight">REST</span> and <span class="highlight">SOAP</span>.</p>
			<p><div><IoMdPhonePortrait class="icon" /></div>I have experience building mobile apps with <span class="highlight">React Native</span> and <span class="highlight">Android Studio</span>.</p>
			<p><div><IoMdMusicalNotes class="icon" /></div>I also produce electronic music. My favourite genres to produce are house, techno, ambient, and downtempo.</p>
		</Section>
		<Section
			title="resume"
			id="3">
			<h3>education</h3>
			<p>2009-2012 B.A. in Linguistics, Saint Mary's University, Halifax</p>
			<p>2018-2020 Cert. in Computers and Information Technology, McGill University, Montréal</p>
			<ul class="resume-list">
				<li class="resume-list-item">Data structures & algorithms</li>
				<li class="resume-list-item">Web development/services</li>
				<li class="resume-list-item">Mobile application development</li>
				<li class="resume-list-item">Database design</li>
				<li class="resume-list-item">Encryption/security</li>
				<li class="resume-list-item">Operating systems admin.</li>
				<li class="resume-list-item">Network admin.</li>
			</ul>
			<h3>work</h3>
			<p>2016-2020 Barista, Cafe Myriade</p>
		</Section>
		<Section
			title="portfolio"
			id="4"
			tall>
			<div class="portfolio-grid">
				<div class="portfolio-grid-cell">
					<div class="portfolio-grid-cell-title"><a href="https://github.com/gdstewart/graemestew.art" target="_blank" rel="noopener noreferrer">graemestew.art</a></div>
					<div class="portfolio-grid-cell-blurb">Source code for this site</div>
					<div class="portfolio-grid-cell-link-bar">
						<div class="portfolio-grid-cell-link"><a href="https://github.com/gdstewart/graemestew.art" target="_blank" rel="noopener noreferrer"><IoLogoGithub class="link-icon" aria-label="web-link" /></a></div>
					</div>
				</div>
				<div class="portfolio-grid-cell">
					<div class="portfolio-grid-cell-title"><a href="https://orb-web.now.sh" target="_blank" rel="noopener noreferrer">orb-web</a></div>
					<div class="portfolio-grid-cell-blurb">A handy tool that aggregates various online, non-terrestrial radio stations on a single site</div>
					<div class="portfolio-grid-cell-link-bar">
						<div class="portfolio-grid-cell-link"><a href="https://orb-web.now.sh" target="_blank" rel="noopener noreferrer"><IoMdGlobe class="link-icon" aria-label="web-link" /></a></div>
						<div class="portfolio-grid-cell-link"><a href="https://github.com/gdstewart/orb-web" target="_blank" rel="noopener noreferrer"><IoLogoGithub class="link-icon" aria-label="web-link" /></a></div>
					</div>
				</div>
				<div class="portfolio-grid-cell">
					<div class="portfolio-grid-cell-title"><a href="https://play.google.com/store/apps/details?id=com.orbmobile" target="_blank" rel="noopener noreferrer">orb-mobile</a></div>
					<div class="portfolio-grid-cell-blurb">Mobile version of orb (Android only)</div>
					<div class="portfolio-grid-cell-link-bar">
						<div class="portfolio-grid-cell-link"><a href="https://play.google.com/store/apps/details?id=com.orbmobile" target="_blank" rel="noopener noreferrer"><FaGooglePlay class="link-icon" aria-label="web-link" /></a></div>
						<div class="portfolio-grid-cell-link"><a href="https://github.com/gdstewart/orb-mobile" target="_blank" rel="noopener noreferrer"><IoLogoGithub class="link-icon" aria-label="web-link" /></a></div>
					</div>
				</div>
				<div class="portfolio-grid-cell">
					<div class="portfolio-grid-cell-title"><a href="https://sekvens.now.sh" target="_blank" rel="noopener noreferrer">sekvens</a></div>
					<div class="portfolio-grid-cell-blurb">A cool audiovisual website me and <a href="https://github.com/nealstewart" target="_blank" rel="noopener noreferrer">@nealstewart</a> are working on</div>
					<div class="portfolio-grid-cell-link-bar">
						<div class="portfolio-grid-cell-link"><a href="https://sekvens.now.sh" target="_blank" rel="noopener noreferrer"><IoMdGlobe class="link-icon" aria-label="web-link" /></a></div>
						<div class="portfolio-grid-cell-link"><a href="https://github.com/gdstewart/sekvens" target="_blank" rel="noopener noreferrer"><IoLogoGithub class="link-icon" aria-label="web-link" /></a></div>
					</div>
				</div>
				<div class="portfolio-grid-cell">
					<div class="portfolio-grid-cell-title"><a href="https://www.youtube.com/watch?v=TE5d_FnDIgk" target="_blank" rel="noopener noreferrer">SOUL SEEKER (2019)</a></div>
					<div class="portfolio-grid-cell-blurb">30 minutes of slowed-down remixes of 70s and 80s jazz and downtempo music</div>
					<div class="portfolio-grid-cell-link-bar">
						<div class="portfolio-grid-cell-link"><a href="https://www.youtube.com/watch?v=TE5d_FnDIgk" target="_blank" rel="noopener noreferrer"><IoLogoYoutube class="link-icon" aria-label="web-link" /></a></div>
					</div>
				</div>
				<div class="portfolio-grid-cell">
					<div class="portfolio-grid-cell-title"><a href="https://gdoro.bandcamp.com/" target="_blank" rel="noopener noreferrer">If I See You (2017)</a></div>
					<div class="portfolio-grid-cell-blurb">Collaboration between me and my friend Dorothea, 90s R&B and vocal house</div>
					<div class="portfolio-grid-cell-link-bar">
						<div class="portfolio-grid-cell-link"><a href="https://gdoro.bandcamp.com/" target="_blank" rel="noopener noreferrer"><FaBandcamp class="link-icon" aria-label="web-link" /></a></div>
					</div>
				</div>
			</div>
		</Section>
		<Section
			title="contact"
			id="5"
			last>
			<form action="https://getform.io/f/0676626b-76a4-46ee-bb5d-f30a53b9e3fd" method="POST">
				<ul class="contact-list">
					<li class="contact-list-item"><input type="text" name="name" placeholder="Name" aria-label="name-field" /></li>
					<li class="contact-list-item"><input type="email" name="email" placeholder="Email" aria-label="email-field" /></li>
					<li class="contact-list-item"><textarea name="message" placeholder="Message" rows="3" cols="50" aria-label="message-field" /></li>
					<li class="contact-list-item" id="submit"><button type="submit">Send</button></li>
				</ul>
			</form>
			<Footer>&copy; 2020<span class="footer-name"> Graeme Stewart</span></Footer>
		</Section>
		<Socbar />
	</Layout >
)