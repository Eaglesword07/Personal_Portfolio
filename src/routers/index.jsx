import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                { routes.map(( { path, component } ) => (
                    <Route key={ path } path={ path } element={ component } />
                ))}
            </Routes>
        </Router>
    );
}

export default AppRouter;