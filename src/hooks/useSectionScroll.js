/**
 * useSectionScroll.js
 *
 * Scroll-driven state for the About page.
 *
 * Choreography (three sequential scroll bands):
 *
 *   Band 1  0            → PHOTO_END   : photo animates start → end  (tPhoto 0→1)
 *   Band 2  PHOTO_END    → BIO_END     : bio slides up               (tBio   0→1)
 *   Band 3  BIO_END      → TRAP_END    : sticky frame holds, then releases
 */

import { useEffect, useRef, useState } from "react";

function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
function lerp(a, b, t)  { return a + (b - a) * clamp(t, 0, 1); }

const SECTION_IDS = ['about', 'portfolio', 'contact'];

const CFG = {
    mobile: {
        photoEnd: 500,
        bioEnd:   680,
        trapEnd:  680,
        photo: {
            // top of screen, left side
            start: { top: 100, left: 12, width: 160 },
            // centred horizontally behind name
            end:   { top: 200, left: '50vw - 90px', width: 220 },
        },
    },
    tablet: {
        photoEnd: 550,
        bioEnd:   700,
        trapEnd:  700,
        photo: {
            start: { top: -60, left: 20, width: 200 },
            end:   { top: 180, left: '50vw - 120px', width: 260 },
        },
    },
    desktop: {
        photoEnd: 650,
        bioEnd:   820,
        trapEnd:  820,
        photo: {
            // top of screen, leftish
            start: { top: 0, left: 50, width: 160 },
            end:   { top: 250, left: '28vw - 140px', width: 360 },
        },
    },
};

function getConfig() {
    const w = window.innerWidth;
    if (w < 768)  return CFG.mobile;
    if (w < 1280) return CFG.tablet;
    return CFG.desktop;
}

function resolveLeft(raw) {
    if (typeof raw === 'number') return raw;
    const m = raw.match(/([\d.]+)vw\s*-\s*([\d.]+)px/);
    if (m) return (parseFloat(m[1]) / 100) * window.innerWidth - parseFloat(m[2]);
    return parseFloat(raw);
}

// ─────────────────────────────────────────────────────────────────────────────

export function useSectionScroll() {
    const scrollerRef = useRef(null);
    const litRef      = useRef(null);

    // Initialise photoStyle from the correct breakpoint so there's no flash
    const [photoStyle, setPhotoStyle] = useState(() => {
        const cfg = typeof window !== 'undefined' ? getConfig() : CFG.mobile;
        return {
            top:   cfg.photo.start.top,
            left:  resolveLeft(cfg.photo.start.left),
            width: cfg.photo.start.width,
        };
    });

    const [tPhoto,        setTPhoto]        = useState(0);
    const [tBio,          setTBio]          = useState(0);
    const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);
    const [litProgress,   setLitProgress]   = useState(0);

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;

        let ticking = false;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const sy  = el.scrollTop;
                const cfg = getConfig();

                const { photoEnd, bioEnd } = cfg;
                const { start, end } = cfg.photo;

                // ── Photo (band 1: 0 → photoEnd) ─────────────────────────
                const tp = clamp(sy / photoEnd, 0, 1);
                setTPhoto(tp);
                setPhotoStyle({
                    top:   lerp(start.top,                  end.top,   tp),
                    left:  lerp(resolveLeft(start.left),    resolveLeft(end.left), tp),
                    width: lerp(start.width,                end.width, tp),
                });

                const tb = clamp((sy - photoEnd) / (bioEnd - photoEnd), 0, 1);
                setTBio(tb);

                const navH = 64;
                let current = SECTION_IDS[0];
                SECTION_IDS.forEach((id) => {
                    const sec = document.getElementById(id);
                    if (!sec) return;
                    const secTop = sec.offsetTop - el.offsetTop;
                    if (sy >= secTop - navH - 10) current = id;
                });
                setActiveSection(current);

                if (litRef.current) {
                    const litRect  = litRef.current.getBoundingClientRect();
                    const elRect   = el.getBoundingClientRect();
                    const height   = litRef.current.offsetHeight;
                    const entered  = elRect.bottom - litRect.top;
                    const startAt  = height * 0.5;
                    const duration = height * 1.0;
                    setLitProgress(clamp((entered - startAt) / duration, 0, 1));
                }

                ticking = false;
            });
        };

        el.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => el.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        const target = document.getElementById(id);
        if (target && scrollerRef.current) {
            const navH = 64;
            scrollerRef.current.scrollTo({
                top: target.offsetTop - scrollerRef.current.offsetTop - navH,
                behavior: 'smooth',
            });
        }
    };

    return {
        scrollerRef,
        activeSection,
        litRef,
        photoStyle,
        tPhoto,
        tBio,
        bioVisible: tBio,
        litProgress,
        scrollTo,
    };
}