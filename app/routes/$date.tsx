import { useEffect, useState } from 'react'

import { format } from 'date-fns'
import {
  json,
  LinksFunction,
  useFetcher,
  useLoaderData,
  useParams,
} from 'remix'
import type { LoaderFunction, MetaFunction } from 'remix'

import API from '~/api'

import { DATE_DISPLAY_FORMAT, TIME_TO_REFETCH } from '~/constants'

import { DateSelector } from '~/components/DateSelector'
import { links as dayPickerInputStyles } from '~/components/DayPickerInput'
import { GamesList } from '~/components/GamesList'
import { Layout } from '~/components/Layout'

import { getDays } from '~/utils/handleDates'
import { getSocialMetas, getUrl } from '~/utils/seo'

import { useRevalidateOnInterval } from '~/hooks/use-revalidate-on-interval'
import { GameList, RequestInfo } from '~/types'

export const links: LinksFunction = () => [...dayPickerInputStyles()]

export const meta: MetaFunction = ({ data }) => {
  const date = data.requestInfo.pathname.substring(1)
  const { day } = getDays(date)

  return getSocialMetas({
    url: getUrl(data.requestInfo),
    origin: data.requestInfo.origin,
    title: `Games for ${format(day, 'dd/MM/yyyy')} | NBA Remix`,
    description: `See the current games for ${format(
      day,
      DATE_DISPLAY_FORMAT,
    )}`,
  })
}

export type LoaderData = {
  games: GameList[]
  requestInfo: RequestInfo
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url)

  const requestInfo = {
    origin: url.origin,
    pathname: url.pathname,
  }

  const {
    data: {
      scoreboard: { games },
    },
  } = await API.getGamesByDate(params.date)

  return json<LoaderData>({ games, requestInfo })
}

export default function Index() {
  const { date } = useParams()
  const { day, prevDay, nextDay } = getDays(date)
  const { games: loaderGames } = useLoaderData<LoaderData>()
  const fetcher = useFetcher()

  const [games, setGames] = useState(loaderGames)

  const revalidateOnActiveTab = () => {
    if (document.visibilityState === 'visible') {
      fetcher.load(`/${date}`)
    }
  }

  useRevalidateOnInterval({
    interval: TIME_TO_REFETCH,
    revalidateFn: revalidateOnActiveTab,
  })

  useEffect(() => {
    if (fetcher.data) {
      const { games } = fetcher.data
      setGames(games)
    }
  }, [fetcher.data])

  useEffect(() => setGames(loaderGames), [loaderGames, date])

  return (
    <Layout>
      <DateSelector day={day} prevDay={prevDay} nextDay={nextDay} />

      <GamesList games={games} />
    </Layout>
  )
}
