import nProgress from 'nprogress'
import { useEffect } from 'react'
import { useTransition } from 'remix'

/**
 * When the state is idle then we can to complete the progress bar
 * and when it's something else it means it's either submitting a form or
 * waiting for the loaders of the next location so we start it
 */

export function useNProgress() {
  const transition = useTransition()

  useEffect(() => {
    if (transition.state === 'idle') nProgress.done()
    else nProgress.start()
  }, [transition.state])
}
