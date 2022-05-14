import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function Navigation() {
    const loggedIn = useSelector(getIsLoggedIn);
    const activeLink = ({ isActive }) => (isActive ? `${s.link} ${s.activeLink}` : s.link);
    return (
        <div className='s.navigationBox'>
            <NavLink className={activeLink} to="/">
                Homepage
            </NavLink>
            {loggedIn && (
                <NavLink className={activeLink} to="/phonebook">
                    Phonebook
                </NavLink>
            )}
        </div>
    );
}