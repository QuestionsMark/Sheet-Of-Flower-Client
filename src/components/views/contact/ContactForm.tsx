import { FormEvent, useEffect, useState } from 'react';

import { SubmitBtn } from './SubmitBtn';
import { ValidationErrorItem } from './ValidationErrorItem';

import { fetchTool } from '../../../utils/fetchHelper';
import { checkFormValidation } from '../../../utils/validation';


export interface Email {
    sender: string;
    name: string;
    message: string;
    response: {
        status: boolean;
        message: string;
    };
}

const defaultEmail: Email = {
    message: '',
    name: '',
    response: {
        status: false,
        message: '',
    },
    sender: '',
}

export const ContactForm = () => {

    const [email, setEmail] = useState<Email>(defaultEmail);
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    const handleEmailSend = async (e: FormEvent) => {
        e.preventDefault();
        if (validationErrors.length !== 0) return;
        setValidationErrors(prev => [...prev, 'Trwa wysyłanie...']);
        const { message, name, sender } = email;
        const response = await fetchTool('emails', 'POST', { name, sender, message });
        if (!response.status) {
            setValidationErrors(prev => response.validation ? [...prev, ...response.validation] : [...prev, 'Przepraszamy, spróbuj ponownie później.']);
            return;
        }
        setEmail({ message: '', name: '', response: { status: true, message: 'Wiadomość została wysłana.' }, sender: '' });
    };

    const validationErrorsList = () => {
        return validationErrors.map(e => <ValidationErrorItem key={e} error={e} />);
    };

    useEffect(() => {
        setValidationErrors(checkFormValidation(email));
    }, [email]);

    return (
        <form className="form" onSubmit={handleEmailSend}>
            <input type="text" className="form__inp" placeholder="Imię i nazwisko" minLength={1} maxLength={150} value={email.name} onChange={e => setEmail(prev => ({ ...prev, name: e.target.value }))} />
            <input type="email" className="form__inp" placeholder="E-mail" minLength={1} maxLength={150} value={email.sender} onChange={e => setEmail(prev => ({ ...prev, sender: e.target.value }))} />
            <textarea className="form__textarea" placeholder="Twoja wiadomość" value={email.message} onChange={e => setEmail(prev => ({ ...prev, message: e.target.value }))} />
            <SubmitBtn errors={validationErrors} value="Wyślij" />
            {email.response.message && <p className="form__response" style={{ backgroundColor: email.response.status ? '#9caa64' : '#cf5b5b' }}>{email.response.message}</p>}
            {validationErrors.length > 0 && <ul className="form__validation-list">
                {validationErrorsList()}
            </ul>}
        </form>
    );
};