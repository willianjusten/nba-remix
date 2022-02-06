import { useParams } from "remix";

function Game() {
  const params = useParams();

  return (
    <div>
      <h1>Game {params.gameId}</h1>
    </div>
  );
}

export default Game;
