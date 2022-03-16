import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'

export type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-layout ">
      <div className="z-[1] flex flex-grow flex-col">
        <Header />
        <main className="container mx-auto flex-grow px-4">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
