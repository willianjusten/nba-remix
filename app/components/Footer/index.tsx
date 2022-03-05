function Footer() {
  const linkStyle = 'border-b-blue-500 text-blue-500 hover:border-b-[1px]'

  return (
    <footer className="container mx-auto pt-16 text-center">
      <p>
        Created with ❤️ by those{' '}
        <a
          className={linkStyle}
          href="https://github.com/willianjusten/nba-remix/graphs/contributors"
        >
          amazing developers
        </a>
        , design by{' '}
        <a className={linkStyle} href="https://github.com/alangabrielbs">
          Alan Gabriel
        </a>
        , powered by{' '}
        <a className={linkStyle} href="https://remix.run">
          Remix.run
        </a>
      </p>
    </footer>
  )
}

export default Footer
