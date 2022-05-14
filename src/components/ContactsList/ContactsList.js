import { useDispatch, useSelector } from 'react-redux';
import s from './ContactsList.module.css'
import {
    deleteContacts,
    fetchContacts,
    getVisibleContacts
} from '../../redux/phonebook/selectors';
import { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function Contacts() {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedIn = useSelector(getIsLoggedIn);
    const onDeleteContact = id => {
        //console.log('передали ID', id)
        dispatch(deleteContacts(id));
    };

    useEffect(() => {
        if (!loggedIn) {
            return navigate('/signIn');
        }
    }, [loggedIn, navigate]);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <ul className={s.contactList}>
            {contacts.map(({ id, name, number }) => (
                <li
                    key={id}
                    className={s.contactList__item}>
                    
                    <span className={s.contactList__text}>{name}: </span>
                    <span className={s.contactList__text}>{number}</span>
                
                    <button
                        type="button"
                        className={s.contactList__button}
                        onClick={() => onDeleteContact(id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}