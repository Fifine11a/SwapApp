import db from '../firestore';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

const ItemBookedBtn = (props) => {
  const { id } = useParams();
  const [booked, setBooked] = useState(props.booked);

  const activateItem = (e) => {
    db.collection('items').doc(`${id}`).update({
      status: `active`,
    });
    setBooked(false);
  };

  const bookItem = (e) => {
    db.collection('items').doc(`${id}`).update({
      status: `booked`,
    });
    setBooked(true);
  };

  return (
    <button onClick={booked ? activateItem : bookItem}>
      {booked ? 'Zrušit rezervaci' : 'Rezervovat'}
    </button>
  );
};

export default ItemBookedBtn;
