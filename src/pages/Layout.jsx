import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const Layout = () => {
    const location = useLocation();

    const isLoginPage = location.pathname === '/api/login';
    const isSignupPage = location.pathname === '/api/signup';
    const renderFooter = !isLoginPage && !isSignupPage;

    return (
        <>
            <NavBar />

            <main>
                <Outlet />
            </main>

            {renderFooter && <Footer />}
        </>
    );
};

export default Layout;
