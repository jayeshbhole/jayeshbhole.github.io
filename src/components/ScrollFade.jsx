import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FadeInWhenVisible({ delay, children }) {
	const controls = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			transition={{ duration: 0.5, easings: "easeInOut", delay: delay }}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}>
			{children}
		</motion.div>
	);
}
export default FadeInWhenVisible;
