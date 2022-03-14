import { useEffect } from 'react'

import nProgress from 'nprogress'
import { useTransition } from 'remix'

/**
 * When the state turns to idle it means the interaction is done.
 * When it's not idle, it means something is happening yet,
 * could be waiting for the loaders of the next location or submitting a form.
 */

export function useNProgress() {
  const transition = useTransition()

  useEffect(() => {
    if (transition.state === 'idle') nProgress.done()
    else nProgress.start()
  }, [transition.state])
}
