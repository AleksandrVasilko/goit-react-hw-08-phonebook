import ContactForm from "../../components/ContactForm";
import Filter from "../../components/Filter";
import ContactsList from "../../components/ContactsList";

export default function PhonebookPage() { 
    return (
        <section>
            <ContactForm />
            <Filter />
            <ContactsList />
        </section>
    );
}