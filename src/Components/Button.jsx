import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";


const GridBoxStyle = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$column}, 1fr);
  gap: 5px;

  button {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    
    &:disabled {
        .back {
          background-color: green;
        }
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;

export default function Button({ board, column,handleMatchedPairs,cardMatched,handleTurns }) {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [clickingCount,setClickingCount] = useState(0);

  useEffect(()=>{
    setClickingCount((count)=>count+1
    )
    handleTurns(clickingCount);
    
  },[first,second])
  

  useEffect(() => {
    if (first !== null && second !== null) {
      if (board[first] === board[second]) {
        handleMatchedPairs(
          { firstCard: first, secondCard: second },
        );
      }

      setTimeout(() => {
        setFirst(null);
        setSecond(null);
        setClickingCount((count)=>count-1)
      }, 500);
    }
  }, [second]);

  const isFlipped = (index) =>
    first === index ||
    second === index ||
    cardMatched.some(
      (pair) => pair.firstCard === index || pair.secondCard === index
    );

  return (
    <GridBoxStyle $column={column}>
      {board.map((data, index) => (
        <li className="card" key={index}>
          <button
            onClick={() =>
              first === null
                ? setFirst(index)
                : second === null && index !== first
                ? setSecond(index)
                : null
            }
            disabled={cardMatched.some(
              (pair) => pair.firstCard === index || pair.secondCard === index
            )}
          >
            <Card index={index} isFlipped={isFlipped} frontData = "?" backData={data}/>
          </button>
        </li>
      ))}
    </GridBoxStyle>
  );
}
