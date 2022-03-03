import { format } from 'date-fns'
import { useLoaderData, useParams } from 'remix'
import type { LoaderFunction, MetaFunction } from 'remix'

import DateSelector from '~/components/DateSelector'
import GamesList from '~/components/GamesList'
import Layout from '~/components/Layout'

import { getDays } from '~/utils/handleApiDates'
import { getSocialMetas, getUrl } from '~/utils/seo'

export const meta: MetaFunction = ({ data }) => {
  const date = data.requestInfo.pathname.substring(1)
  const { day } = getDays(date)

  return getSocialMetas({
    url: getUrl(data.requestInfo),
    origin: data.requestInfo.origin,
    title: `Games for ${format(day, 'dd/MM/yyyy')} | NBA Remix`,
    description: `See the current games for ${format(day, 'dd MMMM yyyy')}`,
  })
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url)

  const requestInfo = {
    origin: url.origin,
    pathname: url.pathname,
  }

  const response = await fetch(
    `http://data.nba.net/prod/v2/${params.date}/scoreboard.json`,
  )

  const { games } = await response.json()

  return {
    games,
    requestInfo,
  }
}

export default function Index() {
  const { date } = useParams()
  const { day, prevDay, nextDay } = getDays(date)

  const { games } = useLoaderData()

  return (
    <Layout>
      <DateSelector day={day} prevDay={prevDay} nextDay={nextDay} />

      <GamesList games={games} />
    </Layout>
  )
}
