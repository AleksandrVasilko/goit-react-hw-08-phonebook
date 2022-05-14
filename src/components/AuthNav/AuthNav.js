import s from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
    const activeLink = ({ isActive }) => (isActive ? `${s.link} ${s.activeLink}` : s.link);
    return (
        <div className={s.authNavBox}>
            <NavLink to="/signIn" className={activeLink}>
                Sign In
            </NavLink>
            <NavLink to="/signUp" className={activeLink}>
                Sign Up
            </NavLink>
        </div>
    );
}