import ContactForm from "./ContactForm";
import ContactsList from './ContactsList';
import Container from "./Container";
import Filter from './Filter';


const App = () => {

    return (
      <Container>
        <ContactForm/>
        <Filter/>
        <ContactsList/>
      </Container>
    );
  };

export default App;