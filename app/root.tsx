import nProgressStyles from 'nprogress/nprogress.css'
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'

import { Layout } from '~/components/Layout'

import { useNProgress } from '~/hooks/use-nprogress'

import styles from './tailwind.css'

export const meta: MetaFunction = () => {
  return { title: 'NBA Games' }
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: nProgressStyles },
  ]
}

export type ErrorBoundaryProps = {
  error: {
    message: String
    stack: String
  }
}

export default function App() {
  useNProgress()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}

        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-Q8VLB3JT3F"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || []; function gtag()
              {dataLayer.push(arguments)}
              gtag('js', new Date()); gtag('config', 'G-Q8VLB3JT3F');
              `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  console.error(error)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <h1 className="mb-2 text-4xl font-bold">Oh no!</h1>
          <h2 className="text-2xl font-semibold">Something went wrong.</h2>
        </Layout>
        <Scripts />
      </body>
    </html>
  )
}
