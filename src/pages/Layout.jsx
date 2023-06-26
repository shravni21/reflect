import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const Layout = () => {
    return (
        <>
            <NavBar />

            <main>
                <Outlet />
            </main>

        </>
    );
};

export default Layout;