import "../scss/Contact.scss";
import {
	RiInstagramLine,
	RiMediumFill,
	RiGithubLine,
	RiMailOpenLine,
	RiLinkedinFill,
} from "react-icons/ri";

const Contact = () => {
	return (
		<section id="Contact">
			<h2>Contact Me</h2>
			<h3>Find Me Here</h3>

			<div className="social">
				<a target="blank" href="https://github.com/jayeshbhole">
					<div className="item">
						<RiGithubLine /> <span>GitHub</span>
					</div>
				</a>
				<a target="blank" href="https://www.linkedin.com/in/jayesh-bhole-701086193/">
					<div className="item">
						<RiLinkedinFill /> <span>LinkedIn</span>
					</div>
				</a>
				<a target="blank" href="https://medium.com/@jayeshbhole123">
					<div className="item">
						<RiMediumFill /> <span>Medium</span>
					</div>
				</a>
				<a target="blank" href="mailto:jayeshbhole123@gmail.com">
					<div className="item">
						<RiMailOpenLine /> <span>Mail</span>
					</div>
				</a>
				<a target="blank" href="https://instagram.com/jayeshbhole_">
					<div className="item">
						<RiInstagramLine /> <span>Instagram</span>
					</div>
				</a>
			</div>
		</section>
	);
};
export default Contact;
