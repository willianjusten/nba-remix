import { Link } from 'remix'

function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between px-4 py-8">
      <Link to="/">
        <img className="w-24" src="/images/nba-logo.svg" alt="NBA Remix" />
      </Link>

      <nav className="flex gap-6">
        <Link className="text-lg transition-opacity hover:opacity-70" to="/">
          Home
        </Link>
        <Link
          className="text-lg transition-opacity hover:opacity-70"
          to="/standings"
        >
          Standings
        </Link>
      </nav>
    </header>
  )
}

export default Header
