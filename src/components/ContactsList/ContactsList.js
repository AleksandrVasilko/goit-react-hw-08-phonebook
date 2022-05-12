import { useDispatch, useSelector } from 'react-redux';
import s from './ContactsList.module.css'
import { deleteContacts, fetchContacts, getVisibleContacts } from 'redux/phonebook/selectors';
import { useEffect } from 'react'; 

export default function Contacts() {
    const contacts = useSelector(getVisibleContacts);

    const dispatch = useDispatch();

    const onDeleteContact = id => {
        //console.log('передали ID', id)
        dispatch(deleteContacts(id));
    };

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
        <p className={s.title}>Contacts</p>
        <ul className={s.contactList}>
            {contacts.map(({ id, name, phone }) => (
                <li
                    key={id}
                    className={s.contactList__item}>
                    
                    <span className={s.contactList__text}>{name}: </span>
                    <span className={s.contactList__text}>{phone}</span>
                
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
        </div>
    );
}
