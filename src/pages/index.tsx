import Head from 'next/head'
import { useQuery } from 'react-query'

export default function Home() {
  const fetchGames = async () => {
    const response = await fetch(
      'http://data.nba.net/prod/v2/20220202/scoreboard.json'
    )
    return response.json()
  }

  const { data, status } = useQuery('games', fetchGames)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center">
        {status === 'loading' && <h1>Loading...</h1>}
        {status === 'error' && <h1>Error :(</h1>}
        {status === 'success' && (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">NBA Games</h1>

            <div className="flex gap-4 py-5 text-2xl">
              <button>&laquo;</button>
              <p>Today</p>
              <button>&raquo;</button>
            </div>

            <div className="flex flex-col items-center justify-center">
              {data.games.map((game) => {
                return (
                  <div className="flex" key={game.gameId}>
                    <p>
                      {game.vTeam.score} {game.vTeam.triCode}
                    </p>
                    <span className="px-4">{game.clock || 'x'}</span>
                    <h1>
                      {game.hTeam.triCode} {game.hTeam.score}
                    </h1>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
