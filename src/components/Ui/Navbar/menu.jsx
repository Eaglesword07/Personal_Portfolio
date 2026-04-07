import { useState } from "react";
import { ChartNoAxesGantt, ListX, CircleX } from "lucide-react";
import { Panel } from "./menuPanel/panel.jsx";
import PanelList from "./menuPanel/panelList.jsx";

const Menu = () => {
    const [menuActive, setMenuActive] = useState(false);

    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className="fixed top-4 right-5 sm:top-1 sm:right-6 lg:top-4 lg:right-10 cursor-pointer">
            <div onClick={handleMenuToggle} className="md:hidden">
                {menuActive ? <ListX size={26} /> : <ChartNoAxesGantt size={26} />}
            </div>
            <div onClick={handleMenuToggle}
                 className="hidden md:flex items-center gap-2 font-extralight text-5xl cursor-pointer">
                {menuActive ? 
                    <h2 className="flex items-center gap-24"> Close <CircleX size={40} strokeWidth={1} /></h2>
                : <h2>Menu</h2>}
            </div>
            <Panel isOpen={menuActive}>
                <PanelList />
            </Panel>
        </div>
    );
};

export { Menu };