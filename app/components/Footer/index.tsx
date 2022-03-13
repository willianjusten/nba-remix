export function Footer() {
  const linkStyle = 'border-b-blue-500 text-blue-500 hover:border-b-[1px]'

  return (
    <footer className="container mx-auto pt-16 text-center">
      <p>
        {`Created with `}
        <span className="text-rose-600">♥️</span>
        {` by those `}
        <a
          className={linkStyle}
          href="https://github.com/willianjusten/nba-remix/graphs/contributors"
          target="_blank"
          rel="noreferrer"
        >
          amazing developers
        </a>
        {`, designed by `}
        <a
          className={linkStyle}
          href="https://github.com/alangabrielbs"
          target="_blank"
          rel="noreferrer"
        >
          Alan Gabriel
        </a>
        {` and powered by `}
        <a
          className={linkStyle}
          href="https://remix.run"
          target="_blank"
          rel="noreferrer"
        >
          Remix.run
        </a>
      </p>
    </footer>
  )
}
