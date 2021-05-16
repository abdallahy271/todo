import React from 'react'
import './Home.css'
import logo from "../images/in-focus.png";
import logo2 from "../images/responsive.jpg";

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="homepage">
		{/* <div className="background-chart fade-in">
			<canvas id="background-bar"></canvas>
		</div> */}
		<div className="content-overlay fade-in-up animation-delay__1">
			<div className="hero-container">
				<img className="chart-logo fade-in animation-delay__3 header__logo" src={logo}/>
				<div className="fade-in fade-in animation-delay__3">
					<h1 className="hero-title"></h1>
					<h2 className="hero-subtitle">Simple yet effective Procastination Killer for Productive People</h2>
				</div>
				<div className="hero-button-wrapper fade-in animation-delay__3">
					<Link to='/plan' id="btn-1" className="button button__red" >
                        <div>
                        Get Started
                        </div>
                        </Link>
					
					<a className="button button__black" href="https://github.com/abdallahy271/todo" id="btn-2" target="_blank">GitHub</a>
				</div>
			</div>
			<hr/>
			<div className="feature-container fade-in animation-delay__3">
				<div className="feature">
					<div className="feature-text">
						<h3 className="subtitle">
							<span className="pill pill__new">InFocus Special!</span>
							Task timer
						</h3>
						<p className="description">Custom timer that runs as you work through your tasks, and notifies you to take a break. </p>
					</div>
					<div className="feature-chart feature-chart__right">
						{/* <canvas id="mixed-chart" height="200" width="300"></canvas> */}
						<img height="200" width="200" src="https://cdn2.iconfinder.com/data/icons/team-and-office/160/Time_Management-512.png" />
					</div>
				</div>
				<div className="feature">
					<div className="feature-text feature-text__pull-right">
						<h3 className="subtitle">
							<span className="pill pill__new">InFocus Special!</span>
							Personal Journal
						</h3>
						<p className="description">Write personalized daily experiences, and forge indelible memories on InFocus.</p>
					</div>
					<div className="feature-chart feature-chart__left feature-chart__pull-right">
					<img height="200" width="200" src="https://cdn1.iconfinder.com/data/icons/business-1-48/50/55-512.png" />
					</div>
				</div>
				<div className="feature">
					<div className="feature-text">
						<h3 className="subtitle">
							<span className="pill pill__new">InFocus Special!</span>
							Set Goals!
						</h3>
						<p className="description">Set Specific, Measurable, Actionable, Relevant and Time-bound Goals for your success.</p>
					</div>
					<div className="feature-chart feature-chart__right">
					<img height="200" width="200" src="https://cdn2.iconfinder.com/data/icons/web-technology-2/128/Target-512.png" />
					</div>
				</div>
			</div>
			<hr/>
			<div className="feature-small-container fade-in animation-delay__3">
				<div className="feature-small">
					<div className="feature-icon">
						<img src="https://seeklogo.com/images/O/open-source-logo-55C3B4FF7B-seeklogo.com.png"/>
					</div>
					<h4 className="subtitle subtitle__small">Open source</h4>
					<p className="description description__small">InFocus is a community maintained project, contributions welcome!</p>
				</div>
				<div className="feature-small">
					<div className="feature-icon">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6GhF_yqyk1SZEz9Szk14iuuQJRL7m6IHpw&usqp=CAU"/>
					</div>
					<h4 className="subtitle subtitle__small">Free Usage</h4>
					<p className="description description__small">Enjoy the app for free, and change your life forever!</p>
				</div>
				<div className="feature-small">
					<div className="feature-icon">
						<img src="https://image.flaticon.com/icons/png/512/1438/1438060.png"/>
					</div>
					<h4 className="subtitle subtitle__small">Personalized login</h4>
					<p className="description description__small">Work on your tasks with self-set accountability.</p>
				</div>
				<div className="feature-small">
					<div className="feature-icon">
						<img src={logo2}/>
					</div>
					<h4 className="subtitle subtitle__small">Responsive</h4>
					<p className="description description__small">Use InFocus on your mobile devices as well as personal computers.</p>
				</div>
			</div>

			<hr/>

			<div className="link-container fade-in animation-delay__3">
				<h2 className="subtitle">
					<a href="https://github.com/abdallahy271/todo" target="_blank">Find InFocus on GitHub</a>
				</h2>
			</div>
		</div>

		<footer className="fade-in animation-delay__3">
			<div className="footer-logo">
            <img className="chart-logo fade-in animation-delay__3 header__logo" src={logo}/>
            </div>
            <p className="footer-note">InFocus was built with love by  		<a href="https://ayusuf-sps-spring21.uc.r.appspot.com" target="_blank">Yusuf Abdulmueez.</a>
            </p>
		</footer>

        </div>
    )
}

export default Home
