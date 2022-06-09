import styled from 'styled-components';

const CardItem = ({ src, isFlipped, select }) => {
  const handleClick = (src) => {
    select(src);
  };

  return (
    <CardItemStyled>
      <CardItemContentStyled isFlipped={isFlipped}>
        <CardItemFrontStyled onClick={() => handleClick(src)}>
          ?
        </CardItemFrontStyled>
        <CardItemBackStyled>
          <CardItemBackImageStyled src={src} />
        </CardItemBackStyled>
      </CardItemContentStyled>
    </CardItemStyled>
  );
};

const CardItemStyled = styled.div``;

const CardItemContentStyled = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  position: relative;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 1s;

  ${({ isFlipped }) => isFlipped && `transform: rotateY(180deg);`}
`;

const CardItemFrontStyled = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ecf0f1;
  cursor: pointer;
`;

const CardItemBackStyled = styled.div``;

const CardItemBackImageStyled = styled.img`
  width: 100%;
  height: auto;
  display: flex;
  padding: 1.5rem;
`;

export default CardItem;
