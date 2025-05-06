export default function Header({ handleOnChange, note, gameover }) {
  console.log(gameover);
  return (
    <header>
      <div className="header">
        <img src="/game-logo.png" alt="game-logo" title="Game Logo" />
        <div>
          <h1>Memory Flip Game</h1>
        </div>
      </div>
      <div id="selectingGrid" style={{ display: gameover ? "none" : "block" }}>
        <label>Select Your Grid : </label>
        <input
          type="number"
          placeholder="Enter 2 or 4 grid"
          onChange={handleOnChange}
          defaultValue="2"
        />
      </div>
      <p id="note">{note}</p>
    </header>
  );
}
