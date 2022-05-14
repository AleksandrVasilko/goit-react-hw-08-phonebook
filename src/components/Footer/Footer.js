import s from './Footer.module.css';

const Footer = () => { 
    return (
        <footer className={s.footerBox}>
            <p className={s.footerText}>Phonebook © 2021 - 2022</p>
            <p className={s.footerText}>All rights reserved</p>
        </footer>
    )
}

export default Footer;