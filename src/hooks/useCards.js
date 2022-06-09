import { useState, useEffect } from 'react';

const useCards = () => {
  const [cards, setCards] = useState([
    { src: '/images/img-1.png', matched: false },
    { src: '/images/img-2.png', matched: false },
    { src: '/images/img-3.png', matched: false },
    { src: '/images/img-4.png', matched: false },
    { src: '/images/img-5.png', matched: false },
    { src: '/images/img-6.png', matched: false },
    { src: '/images/img-7.png', matched: false },
    { src: '/images/img-8.png', matched: false },
  ]);

  const shuffleCards = (cards) => {
    setCards(
      [...cards, ...cards]
        .sort(() => 0.5 - Math.random())
        .map((card) => ({
          ...card,
          id: Math.random(),
        }))
    );
  };

  const setMatched = (imageSrc) => {
    setCards(
      cards.map((card) =>
        card.src === imageSrc ? { ...card, matched: true } : card
      )
    );
  };

  useEffect(() => {
    shuffleCards(cards);
  }, []);

  return [cards, setMatched];
};

export default useCards;
