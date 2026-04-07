
const Panel = ({ children, isOpen }) => {
    return (
        <div className={`
                fixed left-0  transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                md:top-1/2 md:-translate-y-1/2
                bottom-20 md:bottom-auto
                `}>
            <div className="p-2"> {children} </div>
        </div>
    );
};

export { Panel };

/***************** Updated Panel.jsx *****************/

// import { ShipWheel } from "lucide-react";

// const Panel = ({ children, isOpen, onToggle }) => {
//     return (
//         <div
//             className="fixed z-50 left-7 bottom-20 
//                         transform -translate-x-1/2
//                         md:bottom-auto md:top-1/2 md:-translate-y-1/2"
//         >
//             {children}

//             <button
//                 onClick={onToggle}
//                 className="
//                     absolute -translate-x-1/2 -translate-y-1/2
//                     flex items-center justify-center
//                     shadow-lg z-10
//                     transition-transform duration-200
//                     hover:scale-105 active:scale-95
//                 "
//                 aria-label={isOpen ? 'Close menu' : 'Open menu'}
//             >
//                 <ShipWheel isOpen={isOpen} size={36} strokeWidth={1.25} />
//             </button>
//         </div>
//     );
// };

// export { Panel };
