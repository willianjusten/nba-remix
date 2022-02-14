import Header from '~/components/Header'

export type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-main bg-cover">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
