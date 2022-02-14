import Header from '~/components/Header'

export type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-900 bg-main bg-cover bg-center pb-24 text-white">
      <Header />
      <main className="container mx-auto px-4">{children}</main>
    </div>
  )
}

export default Layout
