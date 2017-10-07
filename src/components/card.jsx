import React from 'react';

const Cards = (props) => {
  const nextCard = () => {
    props.nextCard();
  };

  return (
    <img onClick={ nextCard } src={ props.card } />
  );
};

export default Cards;
