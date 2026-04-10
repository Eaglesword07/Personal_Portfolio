/**
 * AboutSection.jsx
 *
 * Mobile:  parallax photo slides behind name, bio rises from below, manifesto letter reveal
 * Desktop: giant name + photo fills left half, about text + client logos scroll on right
 *
 * Customise NAME, BIO, MANIFESTO, ACCENT_WORD, ROLE, LOCATION, AVAILABILITY at the top.
 */

import portrait from '@/assets/portrait.avif';

const NAME         = 'Douglas';
const BIO          = 'I design brands and applications that build credibility.';
const ROLE         = 'Brand & Software Developer';
const LOCATION     = 'Based in London, UK';
const AVAILABILITY = 'Available: April 2026';
const MANIFESTO    = 'FOUNDED IN 2026, THIS IS A PERSONAL SPACE WHERE IDEAS ARE TRANSFORMED INTO VISUAL, FUNCTIONAL, AND ENGAGING DIGITAL SOLUTIONS.';
const ACCENT_WORD  = '2026';

const CLIENTS = [
  'Lightspeed', 'Command+R', 'ennLabs', 'Ollio',
  'FocalPoint', 'OdeaoLabs', 'Wildcrafted', 'QuartzAI', 'Galileo'
];

const accentIndices = new Set();
  let search = 0;
  while (true) {
    const idx = MANIFESTO.indexOf(ACCENT_WORD, search);
    if (idx === -1) break;
    for (let k = idx; k < idx + ACCENT_WORD.length; k++) accentIndices.add(k);
    search = idx + 1;
  }
  const nonSpaceCount = MANIFESTO.split('').filter(c => c !== ' ').length;

  
  function renderManifesto(litProgress) {
    let charsSeen = 0;
    return MANIFESTO.split('').map((char, i) => {
        if (char === ' ') return <span key={i}> </span>;
        charsSeen++;
        const threshold = charsSeen / nonSpaceCount;
        const isLit    = litProgress >= threshold;
        const isAccent = accentIndices.has(i);
        return (
            <span
                key={i}
                style={{
                    display: 'inline-block',
                    color: isLit ? (isAccent ? '#e05a3a' : '#fff') : '#333',
                    transition: 'color 0.3s ease',
                }}
            >
                {char}
            </span>
        );
    });
}


function renderManifestoDesktop(litProgress) {
    let charsSeen = 0;
    return MANIFESTO.split('').map((char, i) => {
        if (char === ' ') return <span key={i}> </span>;
        charsSeen++;
        const threshold = charsSeen / nonSpaceCount;
        const isLit    = litProgress >= threshold;
        const isAccent = accentIndices.has(i);
        return (
            <span
                key={i}
                style={{
                    display: 'inline-block',
                    color: isLit ? (isAccent ? '#e05a3a' : '#fff') : '#2a2a2a',
                    transition: 'color 0.3s ease',
                }}
            >
                {char}
            </span>
        );
    });
}




const About = ({photoStyle, bioVisible, litRef, litProgress }) => {

  const mobileLitRef  = (el) => { if (el && window.innerWidth < 768)  litRef.current = el; };
  const desktopLitRef = (el) => { if (el && window.innerWidth >= 768) litRef.current = el; };

  return (
    <section>

      {/* ===================== MOBILE ===================== */}
      <div className="md:hidden">
        {/* Hero scene */}
        <div className="relative overflow-hidden bg-white dark:bg-inherit" style={{ height: 500 }}>
          <div
            className="absolute bottom-0 left-0 right-0 font-black text-black dark:text-neutral-200 leading-none px-3 select-none"
            style={{ 
              fontSize: 'clamp(72px, 20vw, 140px)',
              zIndex: 4,
              letterSpacing: '-0.01em' }}
          >
            {NAME}
          </div>
          <img
            src={portrait}
            alt="Portrait"
            className="absolute rounded-sm"
            style={{ 
              top:    photoStyle.top,
              left:   photoStyle.left,
              width:  photoStyle.width,
              zIndex: 3,
              filter: 'grayscale(20%)',
              transition: 'none' }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 bg-white px-4 py-4"
            style={{ zIndex: 4, transform: `translateY(${(1 - bioVisible) * 100}%)` }}
          >
            <p className="text-sm font-light text-neutral-700 leading-relaxed">{BIO}</p>
            <p className="text-xs font-light text-neutral-400 mt-1">{ROLE}</p>
          </div>
        </div>

        {/* Bio body */}
        <div className="bg-white px-4 pt-8 pb-12">
          <p className="text-base font-light text-neutral-800 leading-relaxed max-w-prose">
            I partner with founders and service-based businesses to clarify positioning,
            refine messaging, and design cohesive brand systems.
          </p>
          <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-prose mt-6">
            My work blends strategic thinking with refined execution, ensuring brands
            don't just look better, but communicate better.
          </p>
        </div>

        {/* Manifesto */}
        <div
          ref={mobileLitRef}
          className="mt-16 -mx-4 px-4 py-16 text-center font-black leading-tight"
          style={{ 
            background: '#111',
            fontSize: 'clamp(20px, 5vw, 40px)',
            letterSpacing: '-0.01em' }}
        >
          <div>
            {renderManifesto(litProgress)}
          </div>
        </div>
      </div>

      {/* ===================== DESKTOP ===================== */}
      <div className="hidden md:block">

        {/* Hero — full width, name + photo + bottom info bar */}
        <div className="relative w-full overflow-hidden bg-white" style={{ minHeight: '85vh' }}>

          {/* Giant name — z-index 2 */}
          <div
            className="absolute bottom-10 left-0 right-0 font-black text-black leading-none px-6 select-none"
            style={{ fontSize: 'clamp(120px, 22vw, 220px)', zIndex: 2, letterSpacing: '-0.03em' }}
          >
            {NAME}
          </div>

          {/* Photo — overlaps name, top-left area, z-index 3 */}
          <img
            src={portrait}
            alt="Portrait"
            className="absolute"
            style={{
              top: `${photoStyle.top}px`,
              left: `${photoStyle.left}px`,
              width: `${photoStyle.width}px`,
              zIndex: 3,
              filter: 'grayscale(15%)',
            }}
          />

          {/* About text — top-right, z-index 4, scrolls in with page */}
          <div
            className="absolute top-6 right-6 z-10"
            style={{ width: '36%', maxWidth: 440 }}
          >
            <p className="text-base font-light text-neutral-800 leading-relaxed mb-6">
              I partner with founders and service-based businesses to clarify positioning,
              refine messaging, and design cohesive brand systems.
            </p>
            {/* Client grid */}
            <div className="grid grid-cols-4 gap-px bg-black/10">
              {CLIENTS.map(name => (
                <div
                  key={name}
                  className="bg-white px-3 py-2.5 flex items-center gap-1.5"
                >
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full border border-black/30 flex-shrink-0"
                  />
                  <span className="text-[11px] font-light text-neutral-700 truncate">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary text — mid right */}
          <div
            className="absolute z-10"
            style={{ top: '52%', right: '6%', width: '32%', maxWidth: 420 }}
          >
            <p className="text-sm font-light text-neutral-400 leading-relaxed">
              My work blends strategic thinking with refined execution, ensuring brands
              don't just look better, but communicate better.
            </p>
          </div>

          {/* Bottom info bar */}
          <div
            className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 pb-3"
style={{ zIndex: 5, transform: `translateY(${(1 - bioVisible) * 100}%)` }}
          >
            <p className="text-sm font-light text-neutral-600">{BIO}</p>
            <p className="text-sm font-light text-neutral-500">{ROLE}</p>
            <p className="text-sm font-light text-neutral-500">{LOCATION}</p>
            <p className="text-sm font-light text-neutral-500">{AVAILABILITY}</p>
          </div>
        </div>

        {/* Manifesto — desktop */}
        <div
          ref={desktopLitRef}
          className="px-8 py-20 text-center font-black leading-tight"
          style={{ background: '#111', fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.02em' }}
        >
          {renderManifestoDesktop(litProgress)}
        </div>

      </div>
    </section>
  );
};

export default About;
