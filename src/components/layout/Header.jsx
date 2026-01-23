import { ThemeToggle } from '../Ui/ThemeToggle';
import { NameLogo } from '../Ui/NameLogo';

const Header = () => {
    return (
        <div className="header">
            <NameLogo />
            <ThemeToggle />
        </div>
    )
}

export default Header;