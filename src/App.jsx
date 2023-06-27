import { useRoutes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Layout from './pages/Layout';
import Home from './pages/Home';
import DiaryPost from './pages/DiaryPost';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Temp from './pages/Temp';

const App = () => {
    const { user } = useAuthContext();

    const elements = useRoutes([
        {
            path: '/',
            element: <Temp />, // Render Temp component for the first route
        },
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/home', element: user ? <Home /> : <Navigate to="/api/login" /> },
                { path: '/api/posts/:id', element: user ? <DiaryPost /> : <Navigate to="/api/login" /> },
                { path: '/api/signup', element: !user ? <Signup /> : <Navigate to="/" /> },
                { path: '/api/login', element: !user ? <Login /> : <Navigate to="/" /> },
            ]
        }
    ]);

    return elements || <Home />; // Return Home component if elements are not available

};

export default App;
