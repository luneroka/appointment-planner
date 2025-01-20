import React, { useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import Root, { ROUTES } from './components/root/Root';
import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

function App() {
  // Define state variables for contacts and appointments
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // Implement functions to add data to contacts and appointments
  function addContact(contact) {
    const newContact = {
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
    };
    setContacts((prev) => [...prev, newContact]);
  }

  function addAppointment(appointment) {
    const newAppointment = {
      name: appointment.name,
      contact: appointment.contact,
      date: appointment.date,
    };
    setAppointments((prev) => [...prev, newAppointment]);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contacts={contacts} onAdd={addContact} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              onAdd={addAppointment}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
