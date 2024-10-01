import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
    return (
        <div className="overflow-x-hidden text-stone-300 antialiased">

            {/* Full-page fixed background */}
            <div className="fixed inset-0 z-[-10] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3), rgba(255,255,255,0))]">
            </div>

            {/* Content wrapper */}
            <div className="min-h-screen max-w-screen-xl mx-auto px-8">
                <Navbar />
                <Hero />
                <Technologies />
                <Projects />
                <Experience />
                <Contact />
            </div>
        </div>
    );
};

export default App;
