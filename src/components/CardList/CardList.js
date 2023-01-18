import React from 'react';

import './CardList.css';

import Card from '../Card/Card';

function CardList() {
  // HARDCODE CARDS ARRAY
  const cards = [
    {
      _id: '1',
      name: 'Нямушка',
      description: 'Печень утки разварная с артишоками.',
      taste: 'с фуа-гра',
      amount: '10',
      gift: 'мышь в подарок',
      weight: '0,5',
      happy: false,
      stock: 20
    },
    {
      _id: '2',
      name: 'Нямушка',
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      taste: 'с рыбой',
      amount: '40',
      gift: '2 мыши в подарок',
      weight: '2',
      happy: false,
      stock: 10
    },
    {
      _id: '3',
      name: 'Нямушка',
      description: 'Филе из цыплят с трюфелями в бульоне.',
      taste: 'с курой',
      amount: '100',
      gift: '5 мышей в подарок',
      weight: '5',
      happy: true,
      stock: null
    }
  ]

  return (
    <main className='cardList'>
      {cards.map((card) => (
        <Card
          card={card}
          key={card._id}
        />
      ))}
    </main>
  );
}

export default CardList;
