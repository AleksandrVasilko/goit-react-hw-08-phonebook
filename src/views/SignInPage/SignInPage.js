import s from './SignInPage.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/auth-operations';
import { getIsLoading } from '../../redux/auth/auth-selectors';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedIn = useSelector(getIsLoading);

    useEffect(() => {
        if (loggedIn) {
            return navigate('/phonebook');
        }
    }, [navigate, loggedIn]);

    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    };

    const formSubmit = e => {
        e.preventDefault();
        dispatch(signIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <section>
            <form className={s.phonebookForm} onSubmit={formSubmit}>
                <div className={s.inputBox}>
                    <label className={s.label}>
                        Email<span className={s.required}>*</span>
                    </label>
                    <input
                        className={s.input}
                        value={email}
                        onClick={handleChange}
                        type='email'
                        name='email'
                        required
                    />
                </div>
                <div className={s.inputBox}>
                    <label className={s.label}>
                        Password<span className={s.required}>*</span>
                    </label>
                    <input
                        className={s.input}
                        value={password}
                        onClick={handleChange}
                        type='password'
                        name='password'
                        title='minimum 7'
                        required
                    />
                </div>
                <div className={s.buttonBox}>
                    <button className={s.addButton} type="submit">
                        Sign-in
                    </button>
                </div>
            </form>
        </section>
    )
}