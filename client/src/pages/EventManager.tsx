import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import TicketList from '../components/TicketList';

const EventManager = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container>
      <TicketList event_id={id as string} />
    </Container>
  );
};

export default EventManager;
