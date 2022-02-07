import { Link } from 'remix'

export type GameCardProps = {
  seasonYear: string
  gameId: string
  clock: string
  vTeam: {
    score: string
    triCode: string
  }
  hTeam: {
    score: string
    triCode: string
  }
}

const GameCard = ({ seasonYear, gameId, vTeam, hTeam, clock }: GameCardProps) => (
  <Link to={`/game/${seasonYear}/${gameId}`} key={gameId}>
    <div style={{ display: 'flex' }}>
      <p>
        {vTeam.score} {vTeam.triCode}
      </p>
      <p>{clock || 'x'}</p>
      <p>
        {hTeam.triCode} {hTeam.score}
      </p>
    </div>
  </Link>
)

export default GameCard
