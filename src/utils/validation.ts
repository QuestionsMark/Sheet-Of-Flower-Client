import { Email } from "../components/views/contact/ContactForm";

export const checkFormValidation = (email: Email) => {
    const errors: string[] = [];
    const { message, name, sender } = email;

    if (!message || typeof message !== 'string' || message.length < 1 || message.length > 10000) {
        errors.push('Wiadomośc powinna zawierać od 1 do 10000 znaków.');
    }

    if (!name || typeof name !== 'string' || name.length < 1 || name.length > 100) {
        errors.push('Imię powinno zawierać od 1 do 100 znaków.');
    }

    if (!sender || typeof sender !== 'string' || !sender.includes('@')) {
        errors.push('Podaj prawidłowy email.');
    }

    return errors;
};