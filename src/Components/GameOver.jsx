export default function GameOver({turns,getTimePlayed,restart}){
    return(
        <section id="gameOver-container">
            <h2>Game Over</h2>
            <div id="result-container">
                <div className="result">
                    <p>No Of Turns</p>
                    <p>{turns}</p>
                </div>
                <div className="result">
                    <p>Time Taken</p>
                    <p>{getTimePlayed}</p>
                </div>
            </div>
            <h1>You Win!</h1>
            <button id="restart" onClick={restart} >Restart</button>
        </section>
    )
}