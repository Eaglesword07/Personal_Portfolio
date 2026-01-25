import { ThemeToggle } from '../Ui/ThemeToggle';
import { NameLogo } from '../Ui/NameLogo';
import { Navbar } from '../Ui/Navbar';

const Header = () => {
    return (
        <div className="header">
            <NameLogo />
            <Navbar />
            <ThemeToggle />
        </div>
    )
}

export default Header;