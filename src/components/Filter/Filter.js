import { useDispatch, useSelector } from 'react-redux'
import { filterChangeAction } from '../../redux/phonebook/actions';
import { getFilter } from '../../redux/phonebook/selectors'
import s from './Filter.module.css'

export default function Filter () { 
    const value = useSelector(getFilter);
    const dispatch = useDispatch();
    const onChange = e =>
        dispatch(filterChangeAction(e.target.value));
    
    return (
        <label >
            <p className={s.filterTitle}>Find contacts by name</p>
            <input
                type="text"
                value={value}
                onChange={onChange}
                className={s.filterInput}
            />
        </label>
    )
}
