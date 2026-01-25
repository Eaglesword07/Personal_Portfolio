import { useState } from "react";
import { ChartNoAxesGantt, ListX, CircleX } from "lucide-react";

const Menu = () => {
    const [menuActive, setMenuActive] = useState(false);

    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    }
    return (
        <div className="absolute top-4 right-5 sm:top-1 sm:right-6 lg:top-4 lg:right-10 cursor-pointer">
            <div onClick={handleMenuToggle} className="md:hidden">
                {menuActive ? <ListX size={26} /> : <ChartNoAxesGantt size={26} />}
            </div>
            <div onClick={handleMenuToggle} className="hidden md:flex items-center gap-2 font-extralight text-5xl">
                {menuActive ? 
                <h2 className="flex items-center gap-24"> Close <CircleX size={40} strokeWidth={1} /></h2>
                : <h2>Menu</h2>}
            </div>
        </div>
    )
}

export { Menu };