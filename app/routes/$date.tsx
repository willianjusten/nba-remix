import { format } from 'date-fns'
import { LinksFunction, useLoaderData, useParams } from 'remix'
import type { LoaderFunction, MetaFunction } from 'remix'

import API from '~/api'
import DateSelector from '~/components/DateSelector'
import { links as dayPickerInputStyles } from '~/components/DayPickerInput'
import GamesList from '~/components/GamesList'
import Layout from '~/components/Layout'

import { DATE_DISPLAY_FORMAT, TIME_TO_REFETCH } from '~/constants'

import useRevalidateOnInterval from '~/hooks/use-revalidate-on-interval'

import { getDays } from '~/utils/handleApiDates'
import { getSocialMetas, getUrl } from '~/utils/seo'

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

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url)

  const requestInfo = {
    origin: url.origin,
    pathname: url.pathname,
  }

  const {
    data: { games },
  } = await API.getGamesByDate(params.date)

  return {
    games,
    requestInfo,
  }
}

export default function Index() {
  useRevalidateOnInterval({ interval: TIME_TO_REFETCH })
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
