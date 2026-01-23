import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white/10 dark:bg-gray-950 text-gray-950 dark:text-white">
            <Header />

            <main>
                {children}
            </main>
            
            <Footer />
        </div>
    );
};

export { Layout };
