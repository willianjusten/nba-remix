import { format, addDays, subDays } from 'date-fns'
import Head from 'next/head'
import { useState } from 'react'
import { useQuery } from 'react-query'

export default function Home() {
  const today = new Date()

  const [date, setDate] = useState(today)

  const userDate = format(date, 'dd MMMM yyyy')
  const apiDate = format(date, 'yyyyMMdd')

  const fetchGames = async ({ queryKey }) => {
    const [, { date }] = queryKey

    const response = await fetch(
      `http://data.nba.net/prod/v2/${date}/scoreboard.json`
    )
    return response.json()
  }

  const { data, status } = useQuery(['games', { date: apiDate }], fetchGames)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">NBA Games</h1>

          <div className="flex gap-4 py-5 text-2xl">
            <button onClick={() => setDate(subDays(date, 1))}>&laquo;</button>
            <p>{userDate}</p>
            <button onClick={() => setDate(addDays(date, 1))}>&raquo;</button>
          </div>

          {status === 'loading' && <h1>Loading...</h1>}
          {status === 'error' && <h1>Error :(</h1>}
          {status === 'success' && (
            <div className="flex flex-col items-center justify-center">
              {data.games.map((game) => {
                return (
                  <div
                    className="grid grid-cols-3 justify-items-center"
                    key={game.gameId}
                  >
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
          )}
        </div>
      </main>
    </div>
  )
}
