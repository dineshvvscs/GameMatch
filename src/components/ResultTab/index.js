import './index.css'

const ResultItem = props => {
  const {score, onRestGame} = props
  const restToGame = () => {
    onRestGame()
  }
  return (
    <div className="backgroundResult">
      <img
        className="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="scoreYourHeading">YOUR SCORE</p>
      <p className="scoreInRecord">{score}</p>
      <div className="buttonContainerRecord">
        <img
          className="resetImage"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <button onClick={restToGame} className="buttonRecord" type="button">
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ResultItem
