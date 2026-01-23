import { ThemeToggle } from './ThemeToggle/ThemeToggle';

const Header = () => {
    return (
        <div className="header">
            <div className="absolute top-10 left-5 sm:top-3 sm:left-6 lg:top-8 lg:left-10
                        text-xs uppercase font-sans tracking-tight leading-none">
                <div className="text-primary">
                    <a href="/">
                        <span className="text-primary">
                            Douglas
                        </span>
                    </a>
                </div>
                <div className="flex items-center uppercase">
                    <a href="/">
                        <span>
                            <span className="mr-1 text-primary">&nbsp; •</span>
                            Adekanye
                        </span>
                    </a>
                </div>
            </div>

            <ThemeToggle />
        </div>
    )
}

export default Header;