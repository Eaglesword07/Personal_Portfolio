import Home from './Home/index.jsx';
import About from './About/index.jsx';
import Portfolio from './Portfolio/index.jsx';
import Contact from './Contact/index.jsx';

const Homepage = () => {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
            <section id="home" className="snap-start h-screen">
                <Home />
            </section>
            <section id="about" className="snap-start h-screen">
                <About />
            </section>
            <section id="portfolio" className="snap-start h-screen">
                <Portfolio />
            </section>
            <section id="contact" className="snap-start h-screen">
                <Contact />
            </section>
        </div>
    );
};

export default Homepage;
export { Home, About, Portfolio, Contact };
