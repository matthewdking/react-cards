import React from 'react';

const Cards = (props) => {
  const nextCard = () => {
    props.nextCard();
  };

  const prevCard = () => {
    props.prevCard();
  };

  return (
    <div>
      <img onClick={ nextCard } src={ props.card } />
      <div>
        <button onClick={ prevCard }>Previous</button>
        <button onClick={ nextCard }>Next</button>
      </div>
    </div>
  );
};

export default Cards;
