import db from '../firestore';
import { useParams } from 'react-router-dom';
import React from 'react';

const ItemBookedBtn = (props) => {
  const { id } = useParams();

  const activateItem = (e) => {
    db.collection('items').doc(`${id}`).update({
      status: `active`,
    });
  };

  const bookItem = (e) => {
    db.collection('items').doc(`${id}`).update({
      status: `booked`,
    });
  };

  return (
    <button onClick={props.booked ? bookItem : activateItem}>
      {props.booked ? 'Zrušit rezervaci' : 'Rezervovat'}
    </button>
  );
};

export default ItemBookedBtn;
