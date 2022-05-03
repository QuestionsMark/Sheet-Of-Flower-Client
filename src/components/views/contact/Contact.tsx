import { faEnvelope, faLocationPin, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export const Contact = () => {
    return (
        <main className="main contact">
            <section className="section">
                <h2 className="contact__title title title--md">Skontaktuj się z nami</h2>
                <div className="contact__container">
                    <ContactInfo icon={faLocationPin} text="ul. Lorema Ipsuma 23/2a 23-123 Miasto" title="adres" />
                    <ContactInfo icon={faMobileScreen} text="123-345-546" title="phone" />
                    <ContactInfo icon={faEnvelope} text="costam.email@gmail.com" title="email" />
                </div>
            </section>
            <section className="section">
                <h2 className="contact__title title title--md">Formularz kontaktowy</h2>
                <ContactForm />
            </section>
        </main>
    );
}