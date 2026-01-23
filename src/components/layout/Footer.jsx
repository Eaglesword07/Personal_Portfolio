import { LINKS } from '@constants/shared';

const Footer = () => {
    return (
        <div className="footer absolute bottom-3 right-2 flex justify-center gap-4 
                    text-center text-xs text-gray-700 sm:flex-row sm:gap-2 sm:pr-4 
                    dark:text-gray-400">
            <div>
                <span>
                    Copyright &copy;&nbsp;
                    {new Date().getFullYear()}
                    &nbsp;DouglasAdekanye.
                </span>
                <span className="max-sm:hidden">·</span>
                <span>
                    <a className="hover:underline" 
                        href={LINKS.personal_website}
                        target="_blank" 
                        rel="noopener noreferrer">GitHub Code</a>
                </span>
            </div>
            
        </div>
    )
}

export default Footer;