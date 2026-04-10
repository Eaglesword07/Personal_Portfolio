/**
 * useScrollSection.js
 *
 * Custom hook that wires up all scroll-driven state for the About page.
 *
 * Returns:
 *   scrollerRef    – attach to the scroll container div
 *   litRef         – attach to the manifesto text block
 *   photoStyle     – { top, left, width } for the parallax portrait
 *   bioVisible     – 0→1 float, drives the bio slide-up translateY
 *   activeSection  – string id of the currently visible section
 *   litProgress    – 0→1 float, drives letter-by-letter reveal
 *   scrollTo(id)   – smooth-scrolls the container to a section by id
 */

import { useEffect, useRef, useState } from "react";

function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
function lerp(a, b, t) { return a + (b - a) * clamp(t, 0, 1); }

const SECTION_IDS = ['about', 'portfolio', 'contact'];

export function useSectionScroll() {
    const scrollerRef   = useRef(null);
    const litRef        = useRef(null);

    const [photoStyle,      setPhotoStyle] = useState({ top: 20, left: 14, width: 220 });
    const [bioVisible,      setBioVisible] = useState(0);
    const [activeSection,   setActiveSection]     = useState(SECTION_IDS[0]);
    const [litProgress,     setLitProgress] = useState(0);

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;

        let ticking = false;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const sy = el.scrollTop;
                    
                const t1 = clamp(sy /150, 0, 1);   
                const t2 = clamp((sy - 150) / 150, 0, 1);
                setPhotoStyle({
                    top:    lerp(lerp(20, 160, t1), 200, t2),
                    left:   lerp(lerp(14, 80, t1), 60, t2),
                    width:  lerp(lerp(220, 260, t1), 300, t2),
                })

                setBioVisible(clamp((sy - 200) / 120, 0, 1));

                const navH = 64;
                let current = SECTION_IDS[0];
                SECTION_IDS.forEach((id) => {
                    const sec = document.getElementById(id);
                    // if (sec && sy >= sec.offsetTop - navH - 10) {
                    //     current = id;
                    // }
                    if (!sec) return;
                    const secTop = sec.offsetTop - el.offsetTop;
                    if (sy >= secTop - navH - 10) current = id;
                });
                setActiveSection(current);

                // if (litRef.current) {
                //     const litTop = litRef.current.offsetTop - el.clientHeight;
                //     const p = clamp((sy - litTop) / (litRef.current.offsetHeight * 1.2), 0, 1);
                //     setLitProgress(p);
                // }

                if (litRef.current) {
                    const litRect  = litRef.current.getBoundingClientRect();
                    const elRect   = el.getBoundingClientRect();
                    // How far the lit block has scrolled into the viewport
                    const entered  = elRect.bottom - litRect.top;
                    const total    = el.clientHeight + litRef.current.offsetHeight * 1.2;
                    setLitProgress(clamp(entered / total, 0, 1));
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
                behavior: 'smooth' });
        }
    }

    return {
        scrollerRef,
        activeSection,
        litRef,
        photoStyle,
        bioVisible,
        litProgress,
        scrollTo
    }
}