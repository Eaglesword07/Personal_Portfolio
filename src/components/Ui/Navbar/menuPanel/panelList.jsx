import { Link } from 'react-router-dom';
import { NAV_LIST } from '@constants/shared.js';

const PanelList = () => {
    return (
        <div>
            <nav className="flex flex-col gap-4 p-4 rounded-lg">
                {NAV_LIST.map(({name, href, icon: Icon}) => (
                    <a 
                        key={name} 
                        href={href}
                        className='flex items-center relative'
                    >
                        <div className="peer">
                            <Icon />
                        </div>
                        <span 
                        className='
                        pointer-events-none
                        absolute left-10
                        opacity-0 translate-x-[-10px]
                        peer-hover:opacity-100
                        peer-hover:translate-x-0
                        transition-all duration-200 delay-75
                        whitespace-nowrap'>
                            {name}
                        </span>
                    </a>
                ))}
            </nav>
        </div>
    )
}

export default PanelList;

// import { Link } from 'react-router-dom';
// import { NAV_LIST } from '@constants/shared.js';

// const ITEM_SIZE = 64; // px — diameter of each nav circle

// const OFFSETS = [
//     { x:   0, y: -150 },   // top
//     { x: 130, y:  -90 },   // top-right
//     { x: 150, y:   15 },   // right
//     { x:   0, y:  140 },   // bottom
//     { x: 130, y:   80 },   // bottom-right
// ];

// const PanelList = ({ isOpen }) => {
//     return (
//         <>
//             {NAV_LIST.map(({ name, path, icon: Icon }, i) => {
//                 const { x, y } = OFFSETS[i] ?? { x: 0, y: (i + 1) * 100 };

//                 return (
//                     <div
//                         key={path}
//                         className="absolute"
//                         style={{
//                             width: ITEM_SIZE,
//                             height: ITEM_SIZE,
//                             top: '50%',
//                             left: '50%',
//                             transform: isOpen
//                                 ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
//                                 : 'translate(-50%, -50%)',
//                             opacity: isOpen ? 1 : 0,
//                             pointerEvents: isOpen ? 'auto' : 'none',
//                             transition: [
//                                 `transform 380ms cubic-bezier(0.34,1.56,0.64,1) ${i * 50}ms`,
//                                 `opacity   200ms ease ${i * 50}ms`,
//                             ].join(', '),
//                             zIndex: 0,
//                         }}
//                     >
//                         <Link
//                             to={path}
//                             className="
//                                 group relative
//                                 flex items-center justify-center
//                                 w-full h-full rounded-full
//                                 border-2 border-white/80 text-white
//                                 hover:bg-white hover:text-neutral-900
//                                 transition-colors duration-200
//                             "
//                             aria-label={name}
//                         >
//                             <Icon size={22} strokeWidth={1.5} />

//                             {/* Slide-in label on hover */}
//                             <span className="
//                                 pointer-events-none
//                                 absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2
//                                 whitespace-nowrap text-sm font-light text-white
//                                 opacity-0 -translate-x-2
//                                 group-hover:opacity-100 group-hover:translate-x-0
//                                 transition-all duration-200
//                             ">
//                                 {name}
//                             </span>
//                         </Link>
//                     </div>
//                 );
//             })}
//         </>
//     );
// };

// export default PanelList;