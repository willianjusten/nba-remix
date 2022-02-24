import { Link, NavLink } from 'remix'

function Header() {
  const linkClass =
    'text-lg transition-opacity hover:opacity-70 hover:border-b-2 hover:border-blue-300'
  const activeLinkClass =
    'text-lg transition-opacity hover:opacity-70 border-b-2 border-blue-500'

  return (
    <header className="container mx-auto flex items-center justify-between px-4 py-8">
      <Link to="/">
        <img className="w-24" src="/images/nba-logo.svg" alt="NBA Remix" />
      </Link>

      <nav className="flex gap-6">
        <NavLink
          className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLinkClass : linkClass)}
          to="/standings"
        >
          Standings
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
