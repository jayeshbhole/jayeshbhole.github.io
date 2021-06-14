// Dependancies
import { BrowserRouter } from "react-router-dom";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import ReactGA from "react-ga";

// Styles
import "./scss/main.scss";
import "./scss/landing.scss";
// Components;
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import SideLinks from "./components/SideLinks";
import Contact from "./components/Contact";

ReactGA.initialize("G-8ZSL82QDFT");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
    return (
        <>
            <div className='main'>
                <Canvas
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        zIndex: "-1",
                    }}>
                    <ambientLight intensity={0.8} />
                    <spotLight position={[10, 10, 10]} angle={1} />
                    <pointLight
                        position={[10, -5, -15]}
                        intensity={0.8}
                        color={"orange"}
                    />
                    <ThreeBack />
                </Canvas>
                <Router />
            </div>
        </>
    );
}
const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <div className='sections'>
                <Landing />
                <About />
                <Projects />
                <Contact />
            </div>
            <SideLinks />
        </BrowserRouter>
    );
};
function ThreeBack(props) {
    const mesh = useRef();

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.0003;
    });

    return (
        <mesh {...props} ref={mesh} scale={1}>
            <sphereGeometry args={[6, 15]} />
            <meshStandardMaterial wireframe color={"#021a72"} />
        </mesh>
    );
}

export default App;
