import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardGrid from './components/CardGrid';
import CardItem from './components/CardItem';

const images = [
  { src: '/images/img-1.png' },
  { src: '/images/img-2.png' },
  { src: '/images/img-3.png' },
  { src: '/images/img-4.png' },
  { src: '/images/img-5.png' },
  { src: '/images/img-6.png' },
  { src: '/images/img-7.png' },
  { src: '/images/img-8.png' },
];

const App = () => {
  const [cards, setCards] = useState([]);
  const [selectedOne, setSelectedOne] = useState(null);
  const [selectedTwo, setSelectedTwo] = useState(null);

  const shuffleCards = () => {
    setCards(
      [...images, ...images]
        .sort(() => 0.5 - Math.random())
        .map((card, id) => ({
          ...card,
          matched: false,
          id,
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

  const handleSelection = (imgSrc) => {
    selectedOne ? setSelectedTwo(imgSrc) : setSelectedOne(imgSrc);
  };

  const resetSelection = () => {
    setSelectedOne(null);
    setSelectedTwo(null);
  };

  useEffect(() => {
    shuffleCards(cards);
  }, []);

  //   useEffect(() => {
  //     //  if (selectedOne && selectedTwo) {
  //     //    if (selectedOne === selectedTwo) {
  //     //      setMatched(selectedOne);
  //     //      resetSelection();
  //     //    } else {
  //     //      setTimeout(() => resetSelection(), 2000);
  //     //    }
  //     //  } else {
  //     //    resetSelection();
  //     //  }

  //     if (selectedOne && selectedTwo) {
  //       console.log(selectedOne, selectedTwo);
  //     }
  //   }, [selectedOne, selectedTwo]);

  useEffect(() => {
    if (selectedOne && selectedTwo) {
      console.log('selected!');
    }
  }, [selectedOne, selectedTwo]);

  return (
    <AppStyled>
      <CardGrid>
        {cards.map((card) => (
          <CardItem
            key={card.id}
            {...card}
            isFlipped={
              card.src === selectedOne ||
              card.src === selectedTwo ||
              card.matched
            }
            select={handleSelection}
          />
        ))}
      </CardGrid>
    </AppStyled>
  );
};

const AppStyled = styled.div`
  background-color: #9b59b6;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
