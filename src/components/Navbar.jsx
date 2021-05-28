import "../scss/navbar.scss";
import { HashLink } from "react-router-hash-link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";

const Navbar = ({ sections }) => {
	const [show, setShow] = useState(false);
	const [flex, setFlex] = useState(false);
	const node = useRef();
	const handleOpen = () => {
		setFlex(!flex);
		setTimeout(() => setShow(!show), 10);
	};
	const handleClose = () => {
		setShow(!show);
		setTimeout(() => setFlex(!flex), 500);
	};
	const handleClickOutside = (e) => {
		if (node.current.contains(e.target)) return;
		handleClose();
	};
	useEffect(() => {
		if (show) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [show]);

	return (
		<nav className={`${show}`} ref={node}>
			<div className={`nav flex-${flex} ${show}`} onClick={handleClose}>
				<h3>Jump To</h3>
				<span>[</span>

				<HashLink smooth={true} to="/#">
					"Home",
				</HashLink>
				<HashLink smooth={true} to="/#About">
					"About",
				</HashLink>
				<HashLink smooth to="/#Projects">
					"Projects",
				</HashLink>
				<HashLink smooth to="/#Contact">
					"Contact"
				</HashLink>

				<span>]</span>
			</div>
			<span id="menu">
				<HiMenuAlt1 className={`${!show}`} onClick={handleOpen} />
				<IoCloseOutline className={`${show}`} onClick={handleClose} />
			</span>
		</nav>
	);
};

export default Navbar;
