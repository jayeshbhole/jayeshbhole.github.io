import "../scss/about.scss";

const About = () => {
	return (
		<section id="About">
			<h2>About Me</h2>
			<div>
				<p>
					Hello!
					<br />
					<br />I am Jayesh Bhole, an undergraduate at IIIT Pune, full-stack web
					developer, robotics enthusiast, a keen reader and a fan of personal growth.
				</p>
				<br />
				<p>On the edge of my seat to learn and create new stuff.</p>
			</div>
			<div id="skills">
				<div>
					<h3>Recent Tech Used</h3>
					<p>
						{">"}&nbsp;React Js <br />
						{">"}&nbsp;Node.Js <br />
						{">"}&nbsp;MongoDB <br />
						{">"}&nbsp;Firebase <br />
					</p>
				</div>
				<div>
					<h3>Languages</h3>
					<p>
						{">"}&nbsp;Javascript <br />
						{">"}&nbsp;Python <br />
						{">"}&nbsp;TypeScript <br />
						{">"}&nbsp;C++ <br />
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
