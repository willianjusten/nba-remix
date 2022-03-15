import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'

export type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gradient-layout flex min-h-screen flex-col bg-slate-900 text-white before:absolute before:h-full before:w-full before:bg-main before:bg-center  before:bg-no-repeat before:blur-[105px] before:content-['']">
      <div className="z-[1]">
        <Header />
        <main className="container mx-auto flex-grow px-4">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
