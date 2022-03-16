import { useRef, useEffect } from 'react'

import { useLocation, useMatches } from 'remix'

export const useServiceWorker = () => {
  const isMounted = useRef(true)
  const location = useLocation()
  const matches = useMatches()

  useEffect(() => {
    const mounted = isMounted.current

    if ('serviceWorker' in navigator) {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller?.postMessage({
          type: 'REMIX_NAVIGATION',
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest,
        })
      } else {
        let listener = async () => {
          await navigator.serviceWorker.ready
          navigator.serviceWorker.controller?.postMessage({
            type: 'REMIX_NAVIGATION',
            isMount: mounted,
            location,
            matches,
            manifest: window.__remixManifest,
          })
        }
        navigator.serviceWorker.addEventListener('controllerchange', listener)
        return () => {
          navigator.serviceWorker.removeEventListener(
            'controllerchange',
            listener,
          )
        }
      }
    }

    return () => {
      isMounted.current = false
    }
  }, [location, matches])
}
