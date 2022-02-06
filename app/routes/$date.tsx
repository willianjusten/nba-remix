import { addDays, format, parseISO, subDays } from "date-fns";
import { Link, useLoaderData, useParams } from "remix";

export const loader = async ({ params }) => {
  const response = await fetch(
    `http://data.nba.net/prod/v2/${params.date}/scoreboard.json`
  );

  return response.json();
};

export default function Index() {
  const { date } = useParams();

  const day = parseISO(date!);
  const prevDay = subDays(day, 1);
  const nextDay = addDays(day, 1);

  const { games } = useLoaderData();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">NBA Games</h1>

          <div className="flex gap-4 py-4">
            <Link to={`/${format(prevDay, "yyyyMMdd")}`}>&laquo;</Link>
            <p>{format(day, "dd MMMM yyyy")}</p>
            <Link to={`/${format(nextDay, "yyyyMMdd")}`}>&raquo;</Link>
          </div>

          <div>
            {games.map((game) => {
              return (
                <Link
                  to={`/game/${game.seasonYear}/${game.gameId}`}
                  key={game.gameId}>
                  <div style={{ display: "flex" }}>
                    <p>
                      {game.vTeam.score} {game.vTeam.triCode}
                    </p>
                    <p>{game.clock || "x"}</p>
                    <p>
                      {game.hTeam.triCode} {game.hTeam.score}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
