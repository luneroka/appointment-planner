import React, { useCallback } from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          placeholder='Name...'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='tel'
          value={phone}
          placeholder='Phone...'
          pattern='^([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)?[0-9]{1,4}?)$'
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type='email'
          value={email}
          placeholder='Email...'
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
