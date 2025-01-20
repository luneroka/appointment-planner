import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString('en-US').split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          placeholder='Title...'
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='date'
          value={date}
          placeholder='Date...'
          min={getTodayString()}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type='time'
          value={time}
          placeholder='Time...'
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <ContactPicker
          contacts={contacts}
          value={contact}
          name={contact.name}
          onChange={(e) => setContact(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
