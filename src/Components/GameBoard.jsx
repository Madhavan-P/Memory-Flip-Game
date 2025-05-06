import Button from "./Button";

export default function GameBoard({
  cardElements,
  columns,
  handleMatchedPairs,
  cardMatched,
  handleTurns,
}) {
  let Grid = [...cardElements];
  return (
    <section id="gameBoard-Container">
      <Button
        board={Grid}
        column={columns}
        handleMatchedPairs={handleMatchedPairs}
        cardMatched={cardMatched}
        handleTurns={handleTurns}
      />
    </section>
  );
}
