export default function Card({index,isFlipped,frontData,backData}){
    return <div className={`card-inner ${isFlipped(index) ? "fliped" : ""}`}>
            <div className="front">{frontData}</div>
            <div className="back">{backData}</div>
        </div>
}