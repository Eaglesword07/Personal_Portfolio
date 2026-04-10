import { useSectionScroll } from '@/hooks/useSectionScroll';
import SectionNav from './sectionNav.jsx';

import Home from './Home/index.jsx';
import About from './About/index.jsx';
import Portfolio from './Portfolio/index.jsx';
import Contact from './Contact/index.jsx';

const TOP_SECTIONS = [
  { id: 'about',     num: '01', label: 'About' },
  { id: 'portfolio', num: '02', label: 'Portfolio' },
  { id: 'contact',   num: '03', label: 'Contact' },
];
 
// const BOTTOM_SECTIONS = [
//   { id: 'insights',     num: '04', label: 'Insights' },
//   { id: 'testimonials', num: '05', label: 'Testimonials' },
//   { id: 'contact',      num: '06', label: 'Contact' },
// ];

const Homepage = () => {
    const {
    scrollerRef,
    litRef,
    photoStyle,
    bioVisible,
    activeSection,
    litProgress,
    scrollTo,
  } = useSectionScroll();

    return (
        <div ref={scrollerRef}
            className=" h-screen overflow-y-auto"
            // snap-y snap-mandatory scroll-smooth
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                
            <div id="home" className="snap-start h-screen">
                <Home />
            </div>

            <SectionNav
                sections={TOP_SECTIONS}
                activeSection={activeSection}
                onTabClick={scrollTo}
                dark={false}
            />
 
            <div id="about" className="snap-start min-h-screen">
                <About 
                    photoStyle={photoStyle}
                    bioVisible={bioVisible}
                    litRef={litRef}
                    litProgress={litProgress} />
            </div>

            <div id="portfolio" className="snap-start h-screen">
                <Portfolio />
            </div>

            <div id="contact" className="snap-start h-screen">
                <Contact />
            </div>

            {/* <SectionNav
                sections={BOTTOM_SECTIONS}
                activeSection={activeSection}
                onTabClick={scrollTo}
                dark={true}
            /> */}

        </div>
    );
};

export default Homepage;
// export { Home, About, Portfolio, Contact };
