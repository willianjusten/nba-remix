import { json } from 'remix'
import type { LoaderFunction } from 'remix'

export const loader: LoaderFunction = () => {
  return json(
    {
      short_name: 'NBA',
      name: 'NBA Remix',
      start_url: '/',
      display: 'standalone',
      background_color: '#3b82f6',
      theme_color: '#d3d7dd',
      icons: [
        {
          src: '/icons/icon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
          density: '0.75',
        },
        {
          src: '/icons/icon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
          density: '1.0',
        },
        {
          src: '/icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
          density: '1.0',
        },
        {
          src: '/icons/icon-120x120.png',
          sizes: '120x120',
          type: 'image/png',
          density: '2.0',
        },
        {
          src: '/icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
          density: '3.0',
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          density: '4.0',
        },
      ],
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  )
}
