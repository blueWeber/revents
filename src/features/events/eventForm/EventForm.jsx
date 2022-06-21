import cuid from 'cuid';
import React, { useState } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

const EventForm = ({
  setFormOpen,
  setEvents,
  createEvent,
  selectedEvent,
  updateEvent,
}) => {
  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: 'Bob',
          attendees: [],
          hostPhotoURL: '/assets/user.png',
        });
    setFormOpen(false);
  };

  const handleInputChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    const newValues = { ...values, [name]: value };
    setValues(newValues);
  };

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event Title'
            value={values.title}
            onChange={handleInputChange}
            name='title'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            value={values.category}
            onChange={handleInputChange}
            name='category'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            value={values.description}
            onChange={handleInputChange}
            name='description'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            value={values.city}
            onChange={handleInputChange}
            name='city'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            value={values.venue}
            onChange={handleInputChange}
            name='venue'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            value={values.date}
            onChange={handleInputChange}
            name='date'
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          onClick={() => setFormOpen(false)}
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
