import React from 'react';

export const ContactPicker = ({ contacts = [], onChange, name, value }) => {
  return (
    <>
      <select onChange={onChange} value={value} name={name}>
        <option value=''>No Contact Selected</option>
        {contacts.map((contact) => {
          return (
            <option key={contact.name} value={contact.name}>
              {contact.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
