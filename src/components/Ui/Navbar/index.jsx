import { Send } from 'lucide-react'
import { Menu } from './menu';

const Navbar = () => {
    return (
        <div>
            <div className="absolute flex flex-col items-end bottom-10 right-2
                            text-gray-700 dark:text-gray-400
                            lg:items-center lg:top-5 md:right-6 lg:right-1/4">
                <span className="flex items-center gap-2 tracking-tight">
                    <Send size={16} strokeWidth={1.25} />
                    <p>kennyroger4u@Rocketmail.com</p>
                </span>
                <span className="tracking-tight">
                    <p>Available for freelance work</p>
                </span>
            </div>
            <Menu />
        </div>
    )
}

export { Navbar };