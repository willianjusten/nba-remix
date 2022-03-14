import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'

export type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 bg-main  bg-center bg-no-repeat text-white">
      <div className="bg-gradient-layout min-h-screen backdrop-blur-bg">
        <Header />
        <main className="container mx-auto flex-grow px-4">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
