// import portrait from '@/assets/portrait.jpg';

const Home = () => {
    return (
        <>
            {/* MOBILE layout */}
            <section
                className="md:hidden flex flex-col items-center min-h-screen"
            >
                <h1
                    className="text-center font-extralight tracking-tight mt-28"
                    style={{ fontSize: 'clamp(64px, 14vw, 96px)', lineHeight: 0.9 }}
                >
                    Hello
                </h1>
                <p className="text-sm font-normal mt-4 tracking-wider text-center px-6">
                    &#8212; It's Douglas, software developer
                </p>

                <div className="flex gap-12 mt-8 text-start">
                    <div>
                        <p className="text-4xl font-light text-neutral-600 leading-none mb-1 tracking-tight">10+</p>
                        <p className="text-sm font-light tracking-wider">Milestones achieved</p>
                    </div>
                    <div>
                        <p className="text-4xl font-light text-neutral-600 leading-none mb-1 tracking-tight">2+</p>
                        <p className="text-sm font-light tracking-wider">Experience</p>
                    </div>
                </div>

                <p className="text-sm font-light mt-6 tracking-widest">
                    Fast builds. Clean code. Real results.
                </p>

                {/* Portrait — fills remaining space, cropped to face */}
                {/* <div className="w-full flex-1 mt-8 overflow-hidden">
                    <img
                        src={portrait}
                        alt="Portrait"
                        className="w-full h-full object-cover object-top"
                        style={{ filter: 'grayscale(100%)', minHeight: '340px' }}
                    />
                </div> */}
            </section>

            {/* DESKTOP layout */}
            <section
                className="hidden md:grid min-h-[850px] overflow-hidden mx-auto pt-40
                            max-w-[1530px]
                            md:grid-cols-[1px_1fr_45%]
                            lg:grid-cols-[36px_1fr_45%]
                            xl:grid-cols-[110px_1fr_45%]"
            >
                <div className="flex flex-col justify-between items-end py-6 border-r border-black/10 dark:border-gray-400/40">
                    <span
                        className="text-[14px] font-medium tracking-widest text-neutral-400"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', paddingLeft: '10px' }}
                    >
                        Fast builds. Clean code. Real results.
                    </span>
                    <span
                        className="text-[15px] font-medium text-neutral-300"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', paddingLeft: '10px' }}
                    >
                        2026
                    </span>
                </div>

                <div className="flex flex-col justify-between px-8 md:px-12">

                    <div className="flex gap-10 text-start">
                        <div>
                            <p className="text-5xl font-light text-neutral-500 leading-none mb-1 tracking-wider">10+</p>
                            <p className="text-sm font-light tracking-wider">Milestones achieved</p>
                        </div>
                        <div>
                            <p className="text-5xl font-light text-neutral-500 leading-none mb-1 tracking-wider">2+</p>
                            <p className="text-sm font-light tracking-wider">Experience</p>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col mt-20 mb-96">
                        <h1
                            className="font-light text-gray-800 dark:text-gray-200 leading-[0.88] tracking-tight"
                            style={{ fontSize: 'clamp(72px, 13vw, 220px)' }}
                        >
                            Hello
                        </h1>
                        <p className="text-sm font-normal mt-3 tracking-widest">
                            — It's Douglas, software developer
                        </p>
                    </div>

                    {/* Scroll hint */}
                    <p className="text-xs font-light text-neutral-900 tracking-widest flex items-center gap-2
                                    animate-slow-bounce">
                        Scroll down
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <polyline points="19 12 12 19 5 12" />
                        </svg>
                    </p>
                </div>

                {/* Portrait column */}
                {/* <div className="relative overflow-hidden">
                    <img
                        src={portrait}
                        alt="Portrait"
                        className="w-full h-full object-cover object-top"
                        style={{ filter: 'grayscale(100%)' }}
                    />
                </div> */}
            </section>
        </>
    );
};

export default Home;

