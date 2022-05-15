import s from './SignUpPage.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/auth-operations';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedIn = useSelector(getIsLoggedIn);

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
            case 'name':
                setName(value);
                break;
            default:
                return;
        }
    };

    const formSubmit = e => {
        e.preventDefault();
        dispatch(signUp({ email, password, name }));
        setEmail('');
        setName('');
        setPassword('');
    };

    return (
        <section>
            <form className={s.phonebookForm} onSubmit={formSubmit}>
                <div className={s.inputBox}>
                    <label className={s.label}>
                        Login<span className={s.required}>*</span>
                    </label>
                    <input
                        className={s.input}
                        value={name}
                        onChange={handleChange}
                        type='text'
                        name='name'
                        required
                    />
                </div>
                <div className={s.inputBox}>
                    <label className={s.label}>
                        Email<span className={s.required}>*</span>
                    </label>
                    <input
                        className={s.input}
                        value={email}
                        onChange={handleChange}
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
                        onChange={handleChange}
                        type='password'
                        name='password'
                        title='minimum 7'
                        required
                    />
                </div>
                <div className={s.buttonBox}>
                    <button className={s.addButton} type="submit">
                        Create
                    </button>
                </div>
            </form>
        </section>
    )
}