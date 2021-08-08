import React, { Fragment } from 'react'
import '../assets/scss/blocks/pages/aboutPage.scss'
import { AboutInfoList } from '../components/AboutInfoList'
const meImg = require('../assets/images/about/me.png')

export const AboutPage: React.FC = () => {

	return (
		// <div className="info">
		// 	<div className="wrapper">
		// 		<div className="info__wrapper">
		// 			<div className="info__img">
		// 				<img src="//via.placeholder.com/300x300" alt="my foto" />
		// 			</div>
		// 			<div className="info__desc">
		// 				<div className="info__name">
		// 					<h1>Ihor Akhabanin</h1>
		// 				</div>
		// 				<AboutInfoList />
		// 			</div>
		// 		</div>
		// 	<i>If this page upsets you, don't forget, I'm not finished with it yet...</i>
		// 	</div>
		// </div>

	<div className="container">
		<header className="header">
			<div className="header__left">
				<div className="header__img">
					<img src={meImg} alt="mine image" />
				</div>
			</div>
			<div className="header__right">
				<h1 className="header__title">Ihor Akhabanin</h1>
				<h2 className="header__subtitle">Frontend<i className="header__icon"></i>developer</h2>
			</div>
			<ul className="header__icons icons">
				<li className="icons__react"></li>
				<li className="icons__ts"></li>
				{/* <li className="icons__redux"></li> */}
				{/* <li className="icons__node"></li> */}
				{/* <li className="icons__jest"></li> */}
				<li className="icons__webpack"></li>
				<li className="icons__sass"></li>
			</ul>
		</header>
		<div className="about">
			<div className="about__left">
				<div className="about__item">
					<div className="about__title main-title">Summary</div>
					<div className="about__summary summary">
						<p>Since 2016 programming became my passion, even more in 2016-2017 I worked as a frontend and fullstack developer (php + js).</p>
						<p>Arriving in Poland in 2017, programming became only a hobby as i couldn't find work in IT because of minimal languages level , both Polish and English.</p>
						<p>Now having significantly raised the level of languages I intend to return to IT, starting with the basics.</p>
						<p>And I'm extremely motivated to constantly develop my skills and grow professionally.</p>
					</div>
				</div>
				<div className="about__item">
					<div className="about__title main-title">Skills</div>
					<ul className="about__skills skills">
						<li className="skills__item">Windows</li>
						<li className="skills__item">Linux</li>
						<li className="skills__item">Webpack</li>
						<li className="skills__item">CRA</li>
						<li className="skills__item">JavaScript(ES6+)</li>
						<li className="skills__item">TypeScript</li>
						<li className="skills__item">React.js</li>
						<li className="skills__item">JSON</li>
						<li className="skills__item">SASS/SCSS</li>
						<li className="skills__item">CSS3</li>
						<li className="skills__item" title="Responsive Web Design">RWD</li>
						<li className="skills__item">BEM</li>
						<li className="skills__item">HTML5</li>
						<li className="skills__item">GIT</li>
						<li className="skills__item">SQL</li>
						<li className="skills__item">MySQL</li>
						<li className="skills__item">Node.js</li>
						<li className="skills__item">Express.js</li>
					</ul>
				</div>
				<div className="about__item">
					<div className="about__title main-title">Contact</div>
					<ul className="about__contact contact">
						<li className="contact__item">
							<a href="tel:+48 574 075 540">
								<i className="icon icon-phone"></i>
								+48 574 075 540
							</a>
						</li>
						<li className="contact__item">
							<a href="https://kir3kin.site/">
								<i className="icon icon-website"></i>
								https://kir3kin.site/
							</a>
						</li>
						<li className="contact__item">
							<a href="mailto:i.akhabanin@gmail.com">
								<i className="icon icon-email"></i>
								i.akhabanin@gmail.com
							</a>
						</li>
						<li className="contact__item">
							<a href="https://github.com/kir3kin">
								<i className="icon icon-github"></i>
								https://github.com/kir3kin
							</a>
						</li>
						<li className="contact__item">
							<a href="https://www.linkedin.com/in/kir3kin/">
								<i className="icon icon-linkedin"></i>
								https://www.linkedin.com/in/kir3kin/
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="about__right">
				<div className="about__item">
					<div className="about__title main-title">WORK EXPERIENCE</div>
					<div className="about__work work">
						<div className="work__left">
							<div className="work__date">Jun 2020 – Current</div>
							<div className="work__company">
								<a href="https://elektropol-r.com/">ELEKTROPOL-R</a>
								<span className="work__titletip">Have nothing to say</span>
							</div>
						</div>
						<div className="work__right">
							<h3 className="work__position">SHOT BLAST MACHINE OPERATOR</h3>
							<ul className="work__list">
								<li className="work__list-item">Shot blasting of stainless steel</li>
								<li className="work__list-item">Quality control of processed parts</li>
								<li className="work__list-item">Service operations of shot blasting machine</li>
							</ul>
						</div>
					</div>
					<div className="about__work work">
						<div className="work__left">
							<div className="work__date">Aug 2016 – Maj 2017</div>
							<div className="work__company">
								<a href="http://omvel.com">GELEOS / omvel</a>
								<span className="work__titletip">Company went bankrupt in 2019(?)</span>
							</div>
						</div>
						<div className="work__right">
							<h3 className="work__position">Junior FULLSTACK DEVELOPER</h3>
							<ul className="work__list">
								<li className="work__list-item">Remote working (via company app for monitoring)</li>
								<li className="work__list-item">Cross-browser & adaptive website coding</li>
								<li className="work__list-item">Creating and combining diffrent JavaScripts</li>
								<li className="work__list-item">Websites debugging</li>
								<li className="work__list-item">Integration with Wordpress</li>
								<li className="work__list-item">Websites empowerment based on Wordpress and OpenCart</li>
								<li className="work__list-item">Websites empowerment based on Yii2, Webasyst, MODx, CakePH</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="about__item">
					<div className="about__title main-title">Education</div>
					<div className="about__work work">
						<div className="work__left">
							<div className="work__date">Jul 2021 – Current</div>
							<div className="work__company">
								<a href="https://www.polskikraj.info/">Polskikraj</a>
								<span className="work__titletip">Usually teach Polish :)</span>
							</div>
						</div>
						<div className="work__right">
							<h3 className="work__position">ENGLISH LANGUAGE COURSE (B1)</h3>
							<ul className="work__list">
								<li className="work__list-item">Learning Individually</li>
							</ul>
						</div>
					</div>
					<div className="about__work work">
						<div className="work__left">
							<div className="work__date">Sep 2019 – Jul 2020</div>
							<div className="work__company">
								<a href="https://www.polskikraj.info/">Polskikraj</a>
								<span className="work__titletip">Usually teach Polish :)</span>
							</div>
						</div>
						<div className="work__right">
							<h3 className="work__position">ENGLISH LANGUAGE COURSE (A2)</h3>
							<ul className="work__list">
								<li className="work__list-item">Learned in group (3-4 people)</li>
								<li className="work__list-item">There was more speaking time than gramatics</li>
								<li className="work__list-item">Simple and Perfect times, Passive voice and so on...</li>
								<li className="work__list-item">
									<a className="hover" href="https://www.linkedin.com/in/maria-ananikyan-56a660a5/">Native speaker as a teacher (from Armenia)</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="about__work work">
						<div className="work__left">
							<div className="work__date">2014 – 2016</div>
							<div className="work__company">
								<a href="http://kk.nau.edu.ua/">KKNAU</a>
								<span className="work__titletip">KRYVYI RIH PROFESSIONAL COLLEGE OF NATIONAL AVIATION UNIVERSITY</span>
							</div>
						</div>
						<div className="work__right">
							<h3 className="work__position">BACHELOR OF RADIOTECHNICS</h3>
							<ul className="work__list">
								<li className="work__list-item">Faculty of Avionics and Computer Technology</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="about__item">
					<div className="about__title main-title">Language skills</div>
					<div className="about__work work">
						<div className="work__left">
							<div className="work__date">Mother tongues:</div>
						</div>
						<div className="work__right">
							<ul className="work__languages">
								<li className="work__languages-item">Ukranian</li>
								<li className="work__languages-item">Russian</li>
							</ul>
						</div>
					</div>
					<div className="about__work work">
						<div className="work__left">
							<div className="work__date">Other languages:</div>
						</div>
						<div className="work__right">
							<ul className="work__languages">
								<li className="work__languages-item">English<span>A2</span></li>
								<li className="work__languages-item">Polish<span>B2</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>



	)
}