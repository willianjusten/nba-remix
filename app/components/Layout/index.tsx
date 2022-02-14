import Header from '~/components/Header'

export type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-main bg-cover text-white">
      <Header />
      <main className="container mx-auto">{children}</main>
    </div>
  )
}

export default Layout
