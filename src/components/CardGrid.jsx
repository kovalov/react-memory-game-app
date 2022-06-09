import styled from 'styled-components';

const CardGrid = ({ cards, children }) => {
  //   const [selectedOne, setSelectedOne] = useState('');
  //   const [selectedTwo, setSelectedTwo] = useState('');
  //   const [isDisabled, setDisabled] = useState(false);

  //   const getSelectedCards = (imageSrc) => {
  //     selectedOne ? setSelectedTwo(imageSrc) : setSelectedOne(imageSrc);

  //     if (selectedOne && selectedTwo) {
  //       console.log(selectedOne, selectedTwo);
  //       setDisabled(true);
  //       console.log(`Disabled: ${isDisabled}`);

  //       if (selectedOne === selectedTwo) {
  //         console.log('Matched!');
  //         setMatched(selectedOne);
  //         console.log(cards);
  //         setSelectedOne('');
  //         setSelectedTwo('');
  //       } else {
  //         console.log('Not matched!');
  //         setSelectedOne('');
  //         setSelectedTwo('');
  //       }
  //     }

  //     setTimeout(() => setDisabled(false), 1000);
  //     console.log(`Disabled: ${isDisabled}`);
  //   };

  return (
    <CardGridStyled>
      {/* {cards.map((card, index) => (
        <CardItem
          key={index}
          {...card}
          disabled={isDisabled}
          getSelectedCards={getSelectedCards}
        />
      ))} */}
      {children}
    </CardGridStyled>
  );
};

const CardGridStyled = styled.div`
  max-width: 600px;
  background-color: #ecf0f1;
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  gap: 1rem;
  padding: 2rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  color: #9b59b6;
  font-size: 2.5rem;
  font-weight: 600;
`;

export default CardGrid;
