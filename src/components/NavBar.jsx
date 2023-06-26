import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout.js';

const NavBar = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();

    const handleClick = () => logout();

    return (
        <header>
            <nav className="reflect">
                <Link to="/"> Reflect  </Link>
            </nav>



            {user ? (
                <div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>
                        Logout
                    </button>
                </div>

            ) : (
                <div>
                    <Link to="/api/login" className='loso'> Login </Link>
                    <Link to="/api/signup" className='loso'> Signup </Link>
                </div>
            )}
        </header>
    );
};

export default NavBar;