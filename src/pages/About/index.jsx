/**
 * AboutSection.jsx
 *
 * Mobile:  parallax photo slides behind name, bio rises from below, manifesto letter reveal
 * Desktop: giant name + photo fills left half, about text + client logos scroll on right
 *
 * Customise NAME, BIO, MANIFESTO, ACCENT_WORD, ROLE, LOCATION, AVAILABILITY at the top.
 */

import { useMemo } from 'react';
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

function preprocessManifesto(text) {
    let charsSeen = 0;
    const words = [];
    let currentWord = [];

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === ' ') {
            if (currentWord.length > 0) {
                words.push(currentWord);
                currentWord = [];
            }
            continue;
        }
        currentWord.push({ char, index: charsSeen, originalIndex: i });
        charsSeen++;
    }
    if (currentWord.length > 0) words.push(currentWord);
    return words;
}

function renderManifesto(litProgress, processed) {
    return processed.map((word, wordIndex) => (
        <span key={wordIndex} style={{ whiteSpace: 'nowrap', marginRight: '0.25em' }}>
            {word.map(({ char, index, originalIndex }, i) => {
                const threshold = (index + 1) / nonSpaceCount;
                const isLit    = litProgress >= threshold;
                const isAccent = accentIndices.has(originalIndex);
                return (
                    <span
                        key={i}
                        style={{
                            marginRight: '0.25em',
                            display: 'inline-block',
                            color: isLit ? (isAccent ? '#e05a3a' : '#fff') : '#333',
                            transition: 'color 0.2s ease',
                        }}
                    >
                        {char}
                    </span>
                );
            })}
        </span>
    ));
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

// ─── scroll-trap heights — must match CFG.*trapEnd in useSectionScroll.js ────
const TRAP_MOBILE  = 680;
const TRAP_DESKTOP = 760;   // used for both tablet and desktop

// ─────────────────────────────────────────────────────────────────────────────

const About = ({ photoStyle, bioVisible, litRef, litProgress }) => {

    const processed = useMemo(() => preprocessManifesto(MANIFESTO), []);

    // Callback refs: write to hook's litRef only for the active breakpoint
    const mobileLitRef  = (el) => { if (el && window.innerWidth < 768)  litRef.current = el; };
    const desktopLitRef = (el) => { if (el && window.innerWidth >= 768) litRef.current = el; };

    // bio translateY: starts fully below (100%) → rises to 0%
    const bioY = `${(1 - bioVisible) * 100}%`;

    return (
        <section id="about">

            {/* ══════════════════════════════════════════ MOBILE */}
            <div className="md:hidden">

                <div style={{ height: TRAP_MOBILE, position: 'relative' }}>

                    <div
                        className="overflow-hidden bg-white dark:bg-inherit"
                        style={{
                            position: 'sticky',
                            top: 64,
                            height: 'calc(100dvh - 64px)',
                        }}
                    >

                        <div
                            className="absolute bottom-36 left-0 right-0 ml-1
                            font-black text-black dark:text-neutral-200 
                              leading-none select-none"
                            style={{
                                fontSize: 'clamp(110px, 27vw, 140px)',
                                zIndex: 4,
                                letterSpacing: '-0.01em',
                            }}
                        >
                              {NAME}
                          </div>

                        <img
                            src={portrait}
                            alt="Portrait"
                            className="absolute rounded-sm"
                            style={{
                                top:    `${photoStyle.top}px`,
                                left:   `${photoStyle.left}px`,
                                width:  `${photoStyle.width}px`,
                                zIndex: 3,
                                filter: 'grayscale(20%)',
                                transition: 'none',
                            }}
                        />

                        <div
                            className="absolute bottom-[70px] left-0 right-0 mx-4
                            text-sm font-light text-neutral-700 dark:text-neutral-300 leading-relaxed"
                            style={{
                                zIndex: 2,
                                transform: `translateY(${bioY})`,
                            }}
                        >
                            <p>{BIO}</p>
                            <p className="mt-4">{ROLE}</p>
                        </div>
                    </div>
                </div>
                {/* ── end trap — sticky releases here ─────────────────────── */}

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

                <div className='p-6 flex justify-center'>
                    <div
                        ref={mobileLitRef}
                        className="px-4 py-16 text-center font-black leading-tight"
                        style={{
                            background: '#111',
                            fontSize: 'clamp(24px, 5vw, 40px)',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        <h2>
                            {renderManifesto(litProgress, processed)}
                        </h2>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════════ TABLET / DESKTOP */}
            <div className="hidden md:block">

                {/* Scroll trap */}
                <div style={{ height: TRAP_DESKTOP, position: 'relative' }}>

                    {/* Sticky hero frame */}
                    <div
                        className="relative w-full overflow-hidden bg-white"
                        style={{
                            position: 'sticky',
                            top: 64,
                            height: 'calc(100dvh - 64px)',
                        }}
                    >

                        <div
                            className="absolute bottom-10 left-0 right-0 font-black text-black leading-none px-6 select-none"
                            style={{
                                fontSize: 'clamp(120px, 22vw, 220px)',
                                zIndex: 2,
                                letterSpacing: '-0.03em',
                            }}
                        >
                            {NAME}
                        </div>

                        <img
                            src={portrait}
                            alt="Portrait"
                            className="absolute"
                            style={{
                                top:    `${photoStyle.top}px`,
                                left:   `${photoStyle.left}px`,
                                width:  `${photoStyle.width}px`,
                                zIndex: 3,
                                filter: 'grayscale(15%)',
                            }}
                        />

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
                                    <div key={name} className="bg-white px-3 py-2.5 flex items-center gap-1.5">
                                        <span className="inline-block w-2.5 h-2.5 rounded-full border border-black/30 flex-shrink-0" />
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


                        <div
                            className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 pb-3"
                            style={{
                                zIndex: 5,
                                transform: `translateY(${bioY})`,
                                background: '#fff',
                                borderTop: '1px solid rgba(0,0,0,0.06)',
                            }}
                        >
                            <p className="text-sm font-light text-neutral-600">{BIO}</p>
                            <p className="text-sm font-light text-neutral-500">{ROLE}</p>
                            <p className="text-sm font-light text-neutral-500">{LOCATION}</p>
                            <p className="text-sm font-light text-neutral-500">{AVAILABILITY}</p>
                        </div>
                    </div>
                </div>
                {/* ── end trap ─────────────────────────────────────────────── */}

                <div
                    ref={desktopLitRef}
                    className="px-8 py-20 text-center font-black leading-tight"
                    style={{
                        background: '#111',
                        fontSize: 'clamp(28px, 4vw, 52px)',
                        letterSpacing: '-0.02em',
                    }}
                >
                    {renderManifestoDesktop(litProgress)}
                </div>
            </div>
        </section>
    );
};

export default About;
