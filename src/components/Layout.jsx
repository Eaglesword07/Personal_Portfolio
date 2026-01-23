// import { ThemeToggle } from './Ui/ThemeToggle/ThemeToggle';
import Header from './Ui/Header';
import Footer from './Ui/Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white/10 dark:bg-gray-950 text-gray-950 dark:text-white">
            {/* <ThemeToggle /> */}
            <Header />

            <main>
                {children}
            </main>
            
            <Footer />
        </div>
    );
};

export { Layout };
