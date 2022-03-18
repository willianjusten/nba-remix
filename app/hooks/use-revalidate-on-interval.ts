import { useEffect } from 'react'

import { useRevalidate } from 'remix-utils'

interface Options {
  interval?: number
  revalidateFn?: () => void
}

export function useRevalidateOnInterval({
  interval = 1000,
  revalidateFn,
}: Options) {
  const defaultRevalidate = useRevalidate()
  const revalidate = revalidateFn ?? defaultRevalidate

  useEffect(
    function revalidateOnInterval() {
      let intervalId = setInterval(revalidate, interval)
      return () => clearInterval(intervalId)
    },
    [interval, revalidate],
  )
}
