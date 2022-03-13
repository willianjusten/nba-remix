import { useEffect } from 'react'

import { useRevalidate } from 'remix-utils'

interface Options {
  interval?: number
}

export function useRevalidateOnInterval({ interval = 1000 }: Options) {
  let revalidate = useRevalidate()

  useEffect(
    function revalidateOnInterval() {
      let intervalId = setInterval(revalidate, interval)
      return () => clearInterval(intervalId)
    },
    [interval, revalidate],
  )
}
