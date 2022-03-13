import { format } from 'date-fns'
import { LinksFunction, useLoaderData } from 'remix'
import type { LoaderFunction, MetaFunction } from 'remix'

import API from '~/api'

import { DATE_LINK_FORMAT, TIME_TO_REFETCH } from '~/constants'

import { DateSelector } from '~/components/DateSelector'
import { links as dayPickerInputStyles } from '~/components/DayPickerInput'
import { GamesList } from '~/components/GamesList'
import { Layout } from '~/components/Layout'

import { getDays } from '~/utils/handleDates'
import { getSocialMetas, getUrl } from '~/utils/seo'

import { useRevalidateOnInterval } from '~/hooks/use-revalidate-on-interval'

export const links: LinksFunction = () => [...dayPickerInputStyles()]

export const meta: MetaFunction = ({ data }) => {
  return getSocialMetas({
    url: getUrl(data.requestInfo),
    origin: data.requestInfo.origin,
    title: 'Games for today | NBA Remix',
    description: 'See NBA game results and standings powered by Remix.run',
  })
}

export const loader: LoaderFunction = async ({ request }) => {
  const { day } = getDays()
  const date = format(day, DATE_LINK_FORMAT)
  const url = new URL(request.url)

  const requestInfo = {
    origin: url.origin,
    pathname: url.pathname,
  }

  const {
    data: { games },
  } = await API.getGamesByDate(date)

  return { games, requestInfo }
}

export default function Index() {
  const { day, prevDay, nextDay } = getDays()
  const { games } = useLoaderData()
  useRevalidateOnInterval({ interval: TIME_TO_REFETCH })

  return (
    <Layout>
      <DateSelector day={day} prevDay={prevDay} nextDay={nextDay} />

      <GamesList games={games} />
    </Layout>
  )
}
