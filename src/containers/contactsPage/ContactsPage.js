import React, { useState, useEffect, useCallback } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, onAdd }) => {
  // Define state variables for contact info and duplicate check
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add contact info and clear data if the contact name is not a duplicate
    if (!isDuplicate) {
      onAdd({ name: name, phone: phone, email: email });
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  // Using hooks, check for contact name in the contacts array variable in props
  useEffect(() => {
    const duplicate = contacts.some((contact) => contact.name === name);
    setIsDuplicate(duplicate);
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>
      </section>
    </div>
  );
};
