import React, { useState } from 'react';

import './Card.css';

function Card({ card }) {
  const isStock = card.stock;
  const [isSelect, setIsSelect] = useState(false);
  const [description, setDescription] = useState('Сказочное заморское яство');

  const cardClassName = (
    `card ${!isStock ? 'stock_end' : ''} ${isSelect ? 'select' : ''}`
  );

  function handleCardClick() {
    isSelect ? setIsSelect(false) || setDescription('Сказочное заморское яство') : setIsSelect(true);
  }

  function handleHover() {
    isSelect && setDescription('Котэ не одобряет?')
  }

  function handleHoverOff() {
    isSelect && setDescription('Сказочное заморское яство')
  }

  return (
    <div className={cardClassName}>
      <div className='card__wrapper'
        onClick={isStock ? handleCardClick : undefined}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOff}
      >
        <p className='card__description'>{description}</p>
        <h2 className='card__title'>{card.name}</h2>
        <p className='card__subtitle'>{card.taste}</p>
        <ul className='card__options'>
          <li className='card__options-item'>{card.amount} порций</li>
          <li className='card__options-item'>{card.gift}</li>
          {card.happy === true && <li className='card__options-item'>заказчик доволен</li>}

        </ul>
        <div className='card__weight'>
          <p className='card__weight-text_big'>{card.weight}</p>
          <p className='card__weight-text_small'>кг</p>
        </div>
      </div>
      {
        isStock
        ? <p className='card__buy'>
            {
              isSelect
              ? <>{card.description}</>
              : <>Чего сидишь? Порадуй котэ, <span className='card__buy-btn' onClick={handleCardClick}>купи</span>.</>
            }
          </p>
        : <p className='card__buy'>Печалька {card.taste} закончился</p>
      }

    </div>
  )
}

export default Card;
