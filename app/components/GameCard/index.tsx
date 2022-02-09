export type GameCardProps = {
  // TODO: remove season and gameID since we don't use it here
  seasonYear?: string
  gameId?: string
  // TODO: we use clock but we need to get period object as well
  clock?: string
  // TODO: those types will be moved to use from API types
  vTeam: {
    score?: string
    triCode: string
    win: string
    loss: string
  }
  hTeam: {
    score?: string
    triCode: string
    win: string
    loss: string
  }
}

const GameCard = ({ vTeam, hTeam, clock }: GameCardProps) => (
  <div style={{ display: 'flex' }}>
    <p>
      {vTeam.score} {vTeam.triCode}
    </p>
    {/*
      TODO: create way to show clock or when it will start or final
      See: period object from the API
    */}
    <p>{clock || 'x'}</p>
    <p>
      {hTeam.triCode} {hTeam.score}
    </p>
  </div>
)

export default GameCard
