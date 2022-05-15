import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

//axios.defaults.baseURL = 'https://6278d6f96ac99a91065dd31c.mockapi.io/'

export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;

export const getVisibleContacts = state => {
    const contacts = getContacts(state);
    const filter = getFilter(state);
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter),
    );
};

export const fetchContacts = createAsyncThunk('phonebook/fetchContacts', async () => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) { 
        console.log(error);
    }
});

export const deleteContacts = createAsyncThunk('phonebook/deleteContacts', async id => {
    try {
        await axios.delete(`/contacts/${id}`);
        return id;
    } catch (error) { 
        console.log(error);
    }    
});

export const addContacts = createAsyncThunk('phonebook/addContacts', async contact => {
    try {
        const { data } = await axios.post('/contacts/', contact);
        return data;
    } catch (error) { 
        console.log(error);
    }    
});